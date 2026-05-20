import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./Header.module.css";
import { faAngleDoubleRight, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";
export default function Header() {
   return (
      <>
         <div className={`${Style.TopBar} d-lg-flex justify-content-between align-items-center px-5`}>
            <div className="contact-infos">
               <Link href="mailto:info@tech2globe.com" className="hover-underline"><FontAwesomeIcon icon={faEnvelope} style={{ width: '16px', height: '16px' }} className="me-2"
               > </FontAwesomeIcon>
                  info@tech2globe.com</Link>
               <Link href="https://teams.microsoft.com/l/chat/0/0?users=info@tech2globe.com" className="hover-underline">
                  <img src="images/Microsoft_Office_Teams_Logo.svg" width={20} />
                  &nbsp;info@tech2globe.com</Link>
            </div>
            <div className="scam">
               <Link href="/scam-alert" target="_blank"><u>Scam Alert</u></Link>
            </div>
            <div className="contact-info">
               <div className="contact-info">
                  <Link href="tel:+15168585840" className="hover-underline"><FontAwesomeIcon style={{ width: '16px', height: '16px' }} className="me-2"
                     icon={faPhone}></FontAwesomeIcon> +1-516-858-5840 (Sales)</Link>
                  <Link href="tel:+919899675039" className="hover-underline"><FontAwesomeIcon style={{ width: '16px', height: '16px' }} className="me-2"
                     icon={faPhone}></FontAwesomeIcon> +91-9899675039 (Sales)</Link>
               </div>
            </div>
         </div >

         <header className="transparent-header sticky-header">
            <nav className="navbar navbar-expand-xl navbar px-3 px-xl-5">
               <div className="navbar-brand-left">
                  <Link className={Style.NavbarBrand} href="/">
                     <Image src="/images/tech2globe-logo.png" alt="Tech2Globe Logo" width={840} height={244} className="img-fluid" />
                  </Link>
               </div>
               <div className="navbar-collapse collapse d-none d-xl-flex justify-content-end" id="navbarNav">
                  <ul className="RubyMenu">
                     <li className="HasChild">
                        <Link href="#">About</Link>
                        <ul className="Dropdown">
                           <li><Link href="about-us">About Tech2Globe</Link></li>
                           <li><Link href="our-partnerships">Our Partnerships</Link></li>
                           <li><Link href="infrastructure">Infrastructure</Link></li>
                           <li><Link href="our-values">Our Values</Link></li>
                           <li><Link href="associations-ascription">Associations Ascription</Link></li>
                           <li><Link href="clients">Clients</Link></li>
                           <li><Link href="csr-initiatives">CSR Initiatives</Link></li>
                           <li><Link href="5years-milemakers">5 Years Milemakers</Link></li>
                           <li><Link href="our-team">Our Team</Link></li>
                           {/* <li><Link href="life-at-tech2globe">Life at Tech2globe</Link></li> */}
                           <li><Link href="career">Career</Link></li>
                        </ul>
                     </li>
                     <li className="HasMegaChild">
                        <a href="#!">Services</a>
                        <div className="container-fluid megamenu">

                           <ul className="nav nav-tabs scrollable-tabs" id="servicesTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link active" id="amazon-consulting-tab" data-bg="/include/menu-tabs-images/amazon-consulting-tab-bg.png" data-bs-toggle="tab" data-bs-target="#amazon-consulting" type="button" role="tab">Amazon & Walmart Consulting</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="services-ecommerce-tab" data-bg="/include/menu-tabs-images/ecommerce-tab-bg.png" data-bs-toggle="tab" data-bs-target="#services-ecommerce" type="button" role="tab">Ecommerce</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="data-management-tab" data-bg="/include/menu-tabs-images/data-management-tab-bg.png" data-bs-toggle="tab" data-bs-target="#data-management-app" type="button" role="tab">Data Management</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="bpo-kpo-tab" data-bs-toggle="tab" data-bg="/include/menu-tabs-images/bpo-kpo-tab-bg.png" data-bs-target="#bpo-kpo" type="button" role="tab">BPO - KPO</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="data-analytics-for-iot-tab" data-bs-toggle="tab" data-bg="/include/menu-tabs-images/data-analytics-iot-tab-bg.png" data-bs-target="#data-analytics-for-iot" type="button" role="tab">Data Analytics for IOT</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="finance-accounting-tab" data-bs-toggle="tab" data-bg="/include/menu-tabs-images/finance-tab-bg.png" data-bs-target="#finance-accounting" type="button" role="tab">Finance & Accounting</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="graphic-video-tab" data-bs-toggle="tab" data-bg="/include/menu-tabs-images/graphics-and-video-tab-bg.png" data-bs-target="#graphic-video" type="button" role="tab">Graphic & Video</button>
                              </li>
                           </ul>

                           <div className="tab-content flex-grow-1" id="servicesTabContent">
                              <div className="tab-pane h-100 fade show active" id="amazon-consulting" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0 d-none">
                                          <div className="p-4 rounded cta h-100">
                                             <h2 className="text-white mb-4">Maximize Your Amazon Success</h2>
                                             <p className="text-white">Boost sales, optimize listings, and grow your brand with Tech2Globe’s expert Amazon consulting.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Amazon Product Management</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/amazon-copywriting">Amazon
                                                Copywriting</a>
                                             </li>
                                             <li><a className="menu-link" href="/amazon-product-catalog">Amazon
                                                Product Cataloging</a>
                                             </li>
                                             <li><a className="menu-link" href="/amazon-product-translation">Amazon
                                                Product Translation</a>
                                             </li>
                                             <li><a className="menu-link" href="/amazon-review-rating">Amazon Review & Rating Management</a></li>
                                             <li><a className="menu-link" href="/amazon-seo-listing-optimization">Amazon
                                                SEO & Listing Optimization</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/amazon-consulting-services" className="text-decoration-none">Amazon Consulting</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/seller-reinstatement">Seller Account Reinstatement</a></li>
                                             <li><a className="menu-link" href="/amazon-vendor-central-management">Vendor Account Management</a></li>
                                             <li><a className="menu-link" href="/amazon-dropshipping">Amazon Dropshipping</a></li>
                                             <li><a className="menu-link" href="/amazon-fba-consulting">Amazon FBA Consulting</a></li>
                                             <li><a className="menu-link" href="/amazon-sell-global-services">Amazon Global Business</a></li>
                                             <li><a className="menu-link" href="/amazon-virtual-assistance">Amazon Virtual Assistance</a></li>
                                             <li><a className="menu-link" href="/amazon-transparency-program">Amazon Transparency Services</a></li>
                                             <li><a className="menu-link" href="/amazon-fba-support">Amazon FBA Support</a></li>
                                             <li><a className="menu-link" href="/amazon-vendor-recovery">Amazon Vendor Recovery</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/amazon-sales-boost-strategy" className="text-decoration-none">Amazon Sales Boost</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/amazon-marketing-services">Amazon
                                                Marketing Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/amazon-advertising-services">Amazon
                                                Advertising Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/amazon-product-pricing-strategy">Amazon
                                                Product & Pricing</a>
                                             </li>
                                             <li><a className="menu-link" href="/amazon-account-management">Amazon
                                                Account Management</a>
                                             </li>
                                             <li><a className="menu-link" href="/amazon-ppc-services">Amazon
                                                PPC Services</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Amazon Graphics</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/store-creation">Store Creation</a></li>
                                             <li><a className="menu-link" href="/enhanced-brand-content">Enhanced
                                                Brand Content</a>
                                             </li>
                                             <li><a className="menu-link" href="/image-editing-services">Amazon
                                                Image Editing Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/premium-plus-content-services">Premium
                                                A+ Content</a>
                                             </li>
                                             <li><a className="menu-link" href="/aplus-cataloging">A+
                                                Cataloging</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/walmart-full-service-management" className="text-decoration-none">Walmart Full Service Management</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/walmart-advertisement">Walmart Advertising</a>
                                             </li>
                                             <li><a className="menu-link" href="/walmart-marketplace-management">Walmart Marketplace Management</a>
                                             </li>
                                             <li><a className="menu-link" href="/walmart-product-upload-seo">Walmart Product Upload & SEO</a>
                                             </li>
                                             <li><a className="menu-link" href="/walmart-store-management">Walmart Store Management</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade" id="services-ecommerce" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0" >
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/showing-cart-trolley-shopping-online-sign-graphic.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Power Up Your Ecommerce Business</h2>
                                             <p className="text-white">Seamless development, integration, and optimization for top ecommerce platforms.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue" style={{ width: '20%' }}>
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/ecommerce-marketplace-management" className="text-decoration-none">Marketplaces Management Services
                                                </a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/amazon-seller-central-management">Amazon Seller Central Management</a></li>
                                             <li><a className="menu-link" href="/amazon-vendor-central-management">Amazon Vendor Central Management</a></li>
                                             <li><a className="menu-link" href="/ebay-marketplace-management">eBay Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/walmart-marketplace-management">Walmart Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/sears-marketplace-management">Sears Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/newegg-marketplace-management">Newegg Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/rakuten-marketplace-management">Rakuten Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/overstock-marketplace-management">Overstock Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/bestbuy-marketplace-management">Bestbuy Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/cdiscount-marketplace-management">cDiscount Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/wayfair-marketplace-management">Wayfair Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/lazada-marketplace-management">Lazada Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/sharafdg-marketplace-management">SharafDG Marketplace Management</a></li>

                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2" >
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/noon-marketplace-management">Noon Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/myntra-account-management">Myntra Account Management</a></li>
                                             <li><a className="menu-link" href="/meesho-account-management">Meesho Account Management</a></li>
                                             <li><a className="menu-link" href="/flipkart-seller-account-management">Flipkart Seller Account Management</a></li>
                                             <li><a className="menu-link" href="/onbuy-marketplace-management">OnBuy Marketplace Management</a></li>
                                             <li><a className="menu-link" href="/quick-commerce-onboarding-services">Quick Commerce Onboarding</a></li>
                                             <li><a className="menu-link" href="/costco-vendor-onboarding-services">Costco Vendor Onboarding</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Ecommerce Development
                                                </a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/magento-development-company">Magento</a></li>
                                             <li><a className="menu-link" href="/shopify-development-company">Shopify</a></li>
                                             <li><a className="menu-link" href="/woocommerce-development-services">WooCommerce</a></li>
                                             <li><a className="menu-link" href="/ebay-store-design-services">EBay Store Design</a></li>
                                             <li><a className="menu-link" href="/bigcommerce-development-services">BigCommerce</a></li>
                                             <li><a className="menu-link" href="/volusion-development-services">Volusion</a></li>
                                             <li><a className="menu-link" href="/3dcart-development-services">3Dcart</a></li>
                                             <li><a className="menu-link" href="/open-cart-development-services">Opencart</a></li>
                                             <li><a className="menu-link" href="/nop-commerce-development-services">nopCommerce</a></li>
                                          </ul>
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/product-data-entry-services" className="text-decoration-none">Product Data Management
                                                </a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/shopify-product-upload-services">Shopify</a></li>
                                             <li><a className="menu-link" href="/magento-product-upload-services">Magento</a></li>
                                             <li><a className="menu-link" href="/bigcommerce-product-upload-services">Bigcommerce</a></li>
                                             <li><a className="menu-link" href="/woocommerce-product-upload-services">WooCommerce</a></li>
                                             <li><a className="menu-link" href="/walmart-product-upload-services">Walmart</a></li>
                                             <li><a className="menu-link" href="/cdiscount-product-upload-services">cDiscount</a></li>
                                             <li><a className="menu-link" href="/prestashop-product-upload-services">Prestashop</a></li>
                                             <li><a className="menu-link" href="/jet-product-upload-services">Jet.com</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Ecommerce Marketing</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/ecommerce-seo-services">Ecommerce SEO</a></li>
                                             <li><a className="menu-link" href="/ecommerce-social-media-marketing">Ecommerce Social Media</a></li>
                                             <li><a className="menu-link" href="/shopping-ads-services">Ecommerce Shopping Ads</a></li>
                                             <li><a className="menu-link" href="/tiktok-shop-management-services">TikTok Shop Management Services</a></li>
                                          </ul>
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Ecommerce Back Office Support
                                                </a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/customer-support">Customer Support</a></li>
                                             <li><a className="menu-link" href="/order-processing-services">Order Processing</a></li>
                                             <li><a className="menu-link" href="/catalog-management-services">Catalog Management Services</a></li>
                                             <li><a className="menu-link" href="/virtual-assistant-services">Hire Virtual Assistant </a></li>
                                             <li><a className="menu-link" href="/product-data-entry-services">Product Data Entry</a></li>
                                             <li><a className="menu-link" href="/logistics-services">Logistic Services</a></li>
                                             <li><a className="menu-link" href="/chat-support-services">Chat Support</a></li>
                                             <li><a className="menu-link" href="/invoice-processing-services">Invoice Processing</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade" id="data-management-app" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/worker-sits-desk-with-computer-screen-displaying-graphs-charts.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white">Organize & Manage Your Data Efficiently</h2>
                                             <p className="text-white">Enhance data accuracy, accessibility, and quality with Tech2Globe’s expert solutions.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/data-entry-services" className="text-decoration-none">Data Entry</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/accounting-data-entry-services">Accounting
                                                Data Entry</a>
                                             </li>
                                             <li><a className="menu-link" href="/financial-data-entry">Financial
                                                Data Entry</a>
                                             </li>
                                             <li><a className="menu-link" href="/logistics-services">Logistics
                                                Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/image-data-entry-services">Image
                                                Data Entry</a>
                                             </li>
                                             <li><a className="menu-link" href="/insurance-claims-data-entry-services">Insurance
                                                Claims Data Entry</a>
                                             </li>
                                             <li><a className="menu-link" href="/offline-data-entry-services">Offline
                                                Data Entry</a>
                                             </li>
                                             <li><a className="menu-link" href="/online-data-entry-services">Online
                                                Data Entry</a>
                                             </li>
                                             <li><a className="menu-link" href="/pdf-data-entry-services">PDF
                                                Data Entry</a>
                                             </li>
                                             <li><a className="menu-link" href="/product-data-entry-services">Product
                                                Data Entry</a>
                                             </li>
                                             <li><a className="menu-link" href="/yellow-and-white-pages-data-entry-services">Yellow
                                                & White Pages Data Entry</a>
                                             </li>
                                             <li><a className="menu-link" href="/medical-data-entry-services">Medical
                                                Data Entry Services</a>
                                             </li>
                                          </ul>
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/data-mining-services" className="text-decoration-none">Data Mining</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/web-research-services">Web
                                                Research</a>
                                             </li>
                                             <li><a className="menu-link" href="/healthcare-data-mining-services">Healthcare
                                                Data Mining</a>
                                             </li>
                                             <li><a className="menu-link" href="/social-media-research-services">Social
                                                Media Research</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Business Intelligence Services</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/microsoft-power-bi-consulting-services">Microsoft
                                                Power BI Consulting</a></li>
                                             <li><a className="menu-link" href="/tableau-consulting-services">Tableau Consulting Services</a></li>
                                             <li><a className="menu-link" href="/business-research-services">Business
                                                Research</a>
                                             </li>
                                             <li><a className="menu-link" href="/dashboard-design-services">Dashboard
                                                Design</a>
                                             </li>
                                             <li><a className="menu-link" href="/virtual-assistant-services">Virtual
                                                Assistant Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/chat-support-services">Chat
                                                Support Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/lead-generation-services">lead
                                                generation services</a>
                                             </li>
                                             <li><a className="menu-link" href="/banking-data-entry-services">Banking
                                                Data Entry Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/data-analytics-services">Data
                                                Analysis</a>
                                             </li>

                                             <li><a className="menu-link" href="/reporting-and-analysis-services">Reporting
                                                and Analysis</a>
                                             </li>
                                             <li><a className="menu-link" href="/e-commerce-support-services">E-Commerce
                                                Support</a>
                                             </li>
                                             <li><a className="menu-link" href="/donor-research-data-analytics-services">Donor
                                                Research Data Analytics</a>
                                             </li>
                                             <li><a className="menu-link" href="/automation-through-vba-macros-services">Automation
                                                Through VBA Macros</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/data-management-services" className="text-decoration-none">Data Management</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/bulk-product-upload-services">Bulk
                                                Product Upload</a>
                                             </li>
                                             <li><a className="menu-link" href="/catalog-management-services">Catalog
                                                Management</a>
                                             </li>
                                             <li><a className="menu-link" href="/indexing-services">Indexing</a></li>
                                             <li><a className="menu-link" href="/restaurant-menu-entry-services">Restaurant
                                                Menu Entry</a>
                                             </li>
                                             <li><a className="menu-link" href="/sales-support-services">Sales
                                                Support</a>
                                             </li>
                                          </ul>
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/data-cleansing-services" className="text-decoration-none">Data Cleansing</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/data-de-duplication-services">Data
                                                De-duplication</a>
                                             </li>
                                             <li><a className="menu-link" href="/data-standardization-services">Data
                                                Standardization</a>
                                             </li>
                                             <li><a className="menu-link" href="/data-scrubbing-services">Data
                                                Scrubbing</a>
                                             </li>
                                          </ul>
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/transcription-services" className="text-decoration-none">Transcription</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/audio-transcription-services">Audio
                                                Transcription</a>
                                             </li>
                                             <li><a className="menu-link" href="/youtube-transcription-services">YouTube
                                                Transcription</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/data-marketing-services" className="text-decoration-none">Data Marketing</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/custom-list-building-services">Custom
                                                List Building</a>
                                             </li>
                                             <li><a className="menu-link" href="/event-data-management-services">Event
                                                Data Management</a>
                                             </li>
                                             <li><a className="menu-link" href="/insurance-data-collection-services">Insurance
                                                Data Collection</a>
                                             </li>
                                             <li><a className="menu-link" href="/lead-qualification-services">Lead
                                                Qualification</a>
                                             </li>
                                             <li><a className="menu-link" href="/product-research-services">Product
                                                Research</a>
                                             </li>
                                          </ul>
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/data-processing-services" className="text-decoration-none">Data Processing</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/catalog-processing-services">Catalog
                                                Processing</a>
                                             </li>
                                             <li><a className="menu-link" href="/data-conversion-services">Data
                                                Conversion</a>
                                             </li>
                                             <li><a className="menu-link" href="/data-extraction-services">Data
                                                Extraction</a>
                                             </li>
                                             <li><a className="menu-link" href="/document-processing-services">Document
                                                Processing</a>
                                             </li>
                                             <li><a className="menu-link" href="/forms-processing-services">Forms
                                                Processing</a>
                                             </li>
                                             <li><a className="menu-link" href="/insurance-claims-processing-services">Insurance
                                                Claims Processing</a>
                                             </li>
                                             <li><a className="menu-link" href="/invoice-processing-services">Invoice
                                                Processing</a>
                                             </li>
                                             <li><a className="menu-link" href="/order-processing-services">Order
                                                Processing</a>
                                             </li>
                                             <li><a className="menu-link" href="/survey-forms-processing">Survey
                                                Forms Processing</a>
                                             </li>
                                             <li><a className="menu-link" href="/web-scraping-services">Web
                                                Scraping</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade" id="bpo-kpo" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/photo-business-executives-with-headsets-using-computer.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Optimize Operations with Expert Outsourcing</h2>
                                             <p className="text-white">Reduce costs and improve efficiency with our BPO & KPO solutions.</p>
                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/call-centre-services" className="text-decoration-none">Call Centre Services</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/inbound-call-center">Inbound
                                                Call Center</a>
                                             </li>
                                             <li><a className="menu-link" href="/outbound-call-center-solutions">Outbound
                                                Call Center</a>
                                             </li>
                                             <li><a className="menu-link" href="/telemarketing-services">Telemarketing
                                                Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/lead-generation-services">Lead
                                                Generation Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/customer-support">Customer
                                                Support</a>
                                             </li>
                                             <li><a className="menu-link" href="/virtual-assistant-services">Virtual
                                                Assistant Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/call-center-monitoring">Call
                                                Center Monitoring</a>
                                             </li>
                                             <li><a className="menu-link" href="/call-center-consulting">Call
                                                Center Consulting</a>
                                             </li>
                                             <li><a className="menu-link" href="/super-agent-services">Super
                                                Agent Services</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/cctv-monitoring-services" className="text-decoration-none">CCTV Monitoring</a>
                                             </h5>
                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade" id="data-analytics-for-iot" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/bookkeeper-working-with-immobilized-colleague.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Unlock IoT Insights with Smart Data Analytics</h2>
                                             <p className="text-white">Turn realtime IoT data into actionable intelligence for better decision making.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Data Analytics Services for IOT Devices</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/ai-powered-video-analytics">AI
                                                Powered Video Analytics</a>
                                             </li>
                                             <li><a className="menu-link" href="/data-support-kpo-ai-services">AI
                                                Data Support for KPO Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/data-support-ai-services">AI
                                                Data Support Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/chat-support-services">Chat
                                                Support Services For AI Products</a>
                                             </li>
                                             <li><a className="menu-link" href="/customer-data-migration-services">Customer
                                                Data Migration Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/customer-onboarding-services">Customer
                                                Onboarding Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/project-implementation-services">Project
                                                Implementation Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/reporting-and-analytics">Reporting
                                                And Analytics</a>
                                             </li>
                                             <li><a className="menu-link" href="/virtual-assistant-services">Virtual
                                                Assistant Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/voice-support-for-ai-products">Voice
                                                Support For AI Products</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade" id="finance-accounting" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/close-up-shot-business-study-essentials-white-desk-work-study-aesthetics.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Streamline Your Finances with Expert Accounting</h2>
                                             <p className="text-white">Accurate bookkeeping, tax compliance, and financial planning for your business.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/financial-accounting-services" className="text-decoration-none">Finance & Accounting Services</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/bookkeeping-services">Book
                                                Keeping Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/accounting-services">Accounting
                                                Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/accounts-payable-services">Accounts
                                                Payable</a>
                                             </li>
                                             <li><a className="menu-link" href="/accounts-receivable-services">Accounts
                                                Receivable</a>
                                             </li>
                                             <li><a className="menu-link" href="/tax-preparation">Tax
                                                Preparation</a>
                                             </li>
                                             <li><a className="menu-link" href="/financial-analysis-services">Financial
                                                Analysis</a>
                                             </li>
                                             <li><a className="menu-link" href="/payroll-processing-services">Payroll
                                                Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/accounting-software">Accounting
                                                Software</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade" id="graphic-video" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/graphic-video-production-working-pc-with-two-displays-editing.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Engage & Inspire with Stunning Visuals</h2>
                                             <p className="text-white">Get top quality graphic design and video production to elevate your brand.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/photo-editing-services" className="text-decoration-none">Photo Editing Services</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/photo-manipulation-services">Photo
                                                Manipulation Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/image-clipping-services">Image
                                                Clipping Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/photo-enhancement-services">Photo
                                                Enhancement Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/photoshop-Image-Masking-Service">Photo
                                                Masking Process</a>
                                             </li>
                                          </ul>
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/graphic-design-services" className="text-decoration-none">Graphic Services</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/amazon-ebc-services">Amazon
                                                EBC</a>
                                             </li>
                                             <li><a className="menu-link" href="https://www.zphotoedit.com/Brochure.php">Brochure Designing</a></li>
                                             <li><a className="menu-link" href="https://www.zphotoedit.com/Logo-services.php">Logo
                                                Designing</a>
                                             </li>
                                          </ul>
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/video-editing" className="text-decoration-none">Video Editing</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/3d-furniture-modeling-rendering-services">3D Furniture Modeling</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/image-enhancement" className="text-decoration-none">Image Enhancement</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/photo-restoration-services">Photo
                                                Restoration Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/blackandwhite-imagesto-color">Black
                                                & White Images to color</a>
                                             </li>
                                             <li><a className="menu-link" href="/food-photo-editing-services">Food
                                                Photo Editing Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/image-vector-services">Image
                                                Vector Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/skin-retouching-services">Skin
                                                Retouching Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/old-photo-restoration">Old
                                                Photo Restoration</a>
                                             </li>
                                             <li><a className="menu-link" href="/panorama-image-stitching-services">Panoramas
                                                Image Stitching Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/watermark-removal-services">Watermark
                                                Removal Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/drop-shadow">Drop
                                                Shadow</a>
                                             </li>
                                             <li><a className="menu-link" href="/photo-retouching">Photo
                                                Retouching</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/image-clipping" className="text-decoration-none">Image Clipping</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/photo-cutout-services">Photo
                                                Cutout Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/clipping-path-services">Clipping
                                                Path Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/image-tracing-services">Image
                                                Tracing Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/hair-masking-services">Hair
                                                Masking Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/image-manipulation-services">Image
                                                Manipulation Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/car-image-clipping">Car
                                                Image Clipping</a>
                                             </li>
                                             <li><a className="menu-link" href="/image-masking-services">
                                                Image Masking Services</a>
                                             </li>
                                          </ul>
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Special Service</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/bulk-image-conversion">Bulk
                                                Image Conversion</a>
                                             </li>
                                             <li><a className="menu-link" href="/photoshop-services">Photoshop
                                                Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/lightroom-services">Lightroom
                                                Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/threesixty-panorma">360
                                                Panoramas</a>
                                             </li>
                                             <li><a className="menu-link" href="/virtual-staging">Virtual
                                                Staging</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/real-estate-image-processing" className="text-decoration-none">Real Estate</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/post-processingof-real-estate-images">Post
                                                Processing of Real Estate Images</a>
                                             </li>
                                             <li><a className="menu-link" href="/real-estate-day-to-night-conversion-services">Real
                                                Estate Day to night conversion</a>
                                             </li>
                                             <li><a className="menu-link" href="/real-estate-photo-enhancement">Real
                                                Estate Photo Enhancement</a>
                                             </li>
                                             <li><a className="menu-link" href="/real-estate-threesixty-degree-virtual-tours">Real
                                                Estate 360 virtual Tours</a>
                                             </li>
                                             <li><a className="menu-link" href="/floor-plan-conversions">Floor
                                                Plan Conversion</a>
                                             </li>
                                             <li><a className="menu-link" href="/sky-replacement-services">Sky
                                                Replacement Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/real-estate-photo-blending-services">
                                                Real Estate Photo Blending Services</a>
                                             </li>
                                             <li><a className="menu-link" href="/real-estate-HDR-image-blending">
                                                Real Estate HDR Image Blending</a>
                                             </li>
                                             <li><a className="menu-link" href="/twodthreed-floor-plan-conversion">2D/3D
                                                Floor Plan Conversions</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li className="HasMegaChild">
                        <a href="#!">Technologies</a>
                        <div className="container-fluid megamenu">

                           <ul className="nav nav-tabs scrollable-tabs" id="servicesTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link active" id="custom-web-tab" data-bs-toggle="tab" data-bs-target="#custom-web" type="button" role="tab">Custom Web Development</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="ecommerce-tab" data-bs-toggle="tab" data-bg="/include/menu-tabs-images/ecommerce-tab-bg.png" data-bs-target="#ecommerce" type="button" role="tab">Ecommerce Solutions</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="mobile-app-tab" data-bs-toggle="tab" data-bg="/include/menu-tabs-images/mobile-app-development-tab-bg.png" data-bs-target="#mobile-app" type="button" role="tab">Mobile Application</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="emerging-tech-tab" data-bs-toggle="tab" data-bg="/include/menu-tabs-images/emerging-technologies-tab-bg.png" data-bs-target="#emerging-tech" type="button" role="tab">Emerging Technologies</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="uiux-tab" data-bs-toggle="tab" data-bg="/include/menu-tabs-images/ui-ux-tab-bg.png" data-bs-target="#uiux" type="button" role="tab">UI/UX Design</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="services-web-mobile-tab" data-bs-toggle="tab" data-bg="/include/menu-tabs-images/software-development-tab-bg.png" data-bs-target="#services-web-mobile" type="button" role="tab">Web & Mobile</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="testing-tab" data-bs-toggle="tab" data-bg="/include/menu-tabs-images/testing-tab-bg.png" data-bs-target="#testing" type="button" role="tab">Web & Mobile Testing</button>
                              </li>
                           </ul>

                           <div className="tab-content flex-grow-1" id="servicesTabContent">
                              <div className="tab-pane h-100 fade" id="services-web-mobile" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/top-view-unrecognizable-hacker-performing-cyberattack-night.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Innovative Web & Mobile Solutions</h2>
                                             <p className="text-white">Build high performance, secure, and user friendly websites & mobile apps with Tech2Globe.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/software-development" className="text-decoration-none">Software Development</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/e-commerce-development">E-Commerce
                                                Development</a>
                                             </li>
                                             <li><a className="menu-link" href="/enterprise-portal-development">Enterprise
                                                Portal Development</a>
                                             </li>
                                             <li><a className="menu-link" href="/content-management-system">Content
                                                Management System</a>
                                             </li>
                                             <li><a className="menu-link" href="/web-application-development">Web
                                                Application Development</a>
                                             </li>
                                             <li><a className="menu-link" href="/complete-ecommerce-solution-india">ECommerce
                                                Solutions</a>
                                             </li>
                                             <li><a className="menu-link" href="/it-staffing">IT
                                                Staffing Services</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/mobile-app-development" className="text-decoration-none">Mobile App Development</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/android-application-development-services">Android
                                                Apps Development</a>
                                             </li>
                                             <li><a className="menu-link" href="/iphone-ipad-application-development-services">iPhone
                                                iPad Apps Development</a>
                                             </li>
                                             <li><a className="menu-link" href="/mobile-application-development-services">Mobile
                                                Apps Development</a>
                                             </li>
                                             <li><a className="menu-link" href="/windows-application-development-services">Windows
                                                Apps Development</a>
                                             </li>
                                             <li><a className="menu-link" href="/phonegap-development-services">Phonegap
                                                Development Services</a>
                                             </li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Database
                                                   Competencies</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/oracle-applications">Oracle</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade show active" id="custom-web" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/webdesigner-sketching-responsive-website-wireframe-with-laptop-smartphone-tablet.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Custom Web Solutions for Your Business</h2>
                                             <p className="text-white">Get a fast, secure, and scalable website tailored to your needs with Tech2Globe.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/web-development" className="text-decoration-none">Web Development</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/php-development-services">PHP</a></li>
                                             <li><a className="menu-link" href="/java-development-services">Java</a></li>
                                             <li><a className="menu-link" href="/angular-js-development-services">Angular JS</a></li>
                                             <li><a className="menu-link" href="/node-js-development-services">Node JS</a></li>
                                             <li><a className="menu-link" href="/react-js-development-services">React JS</a></li>
                                             <li><a className="menu-link" href="/ruby-on-rails-development">Ruby On Rails</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/framework-development-services" className="text-decoration-none">Framework Development</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/laravel-development-services">Laravel</a></li>
                                             <li><a className="menu-link" href="/codeigniter-development-services">Codeigniter</a></li>
                                             <li><a className="menu-link" href="/cake-php-development">Cake PHP</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/open-source-development-services" className="text-decoration-none">Open Source Development</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/joomla-development">Joomla</a></li>
                                             <li><a className="menu-link" href="/drupal-development">Drupal</a></li>
                                             <li><a className="menu-link" href="/wordpress-development">WordPress</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/microsoft-development-services" className="text-decoration-none">Microsoft Technology</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a className="menu-link" href="/dot-net-development-services">DotNet</a></li>
                                             <li><a className="menu-link" href="/azure-development-services">Azure</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade" id="ecommerce" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/woman-using-laptop-surfing-online-website.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Build, Scale & Optimize Your Online Presence</h2>
                                             <p className="text-white">Create high performing Ecommerce stores and CMS driven websites with Tech2Globe’s expertise.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Ecommerce & CMS Development</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a href="/magento-development-company" className="menu-link">Magento</a></li>
                                             <li><a href="/woocommerce-development" className="menu-link">WooCommerce</a></li>
                                             <li><a className="menu-link" href="/shopify-development-company">Shopify</a></li>
                                             <li><a className="menu-link" href="/volusion-development">Volusion</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/multi-vendor-b2b-solution" className="text-decoration-none">Multivendor & B2B Solutions</a>
                                             </h5>
                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/e-commerce-mobile-apps-development-services" className="text-decoration-none">E-Commerce Apps</a>
                                             </h5>
                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade" id="mobile-app" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/ux-ui-programming-development-technology.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Transform Your Idea into a Powerful App</h2>
                                             <p className="text-white">Build high performance, user friendly mobile apps with Tech2Globe’s expert development team.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/cross-platform-mobile-app-development" className="text-decoration-none">Cross Platform App Development</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a href="/react-native-app-development" className="menu-link">React Native App</a></li>
                                             <li><a href="/ionic-app-development-company" className="menu-link">Ionic App</a></li>
                                             <li><a className="menu-link" href="/flutter-app-development-services">Flutter App</a></li>
                                             <li><a className="menu-link" href="/kotlin-app-development">Kotlin App</a></li>
                                             <li><a className="menu-link" href="/phonegap-app-development-service">PhoneGap App</a></li>
                                             <li><a className="menu-link" href="/xamarin-mobile-app-development">Xamarin App</a></li>
                                             <li><a className="menu-link" href="/hybrid-mobile-app-development">Hybrid App</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Android App</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a href="/android-application-development-services" className="menu-link">Ionic App</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/iphone-app-development-services" className="text-decoration-none">IPhone App</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a href="/iphone-ipad-application-development-services" className="menu-link">IPhone IPad App</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade" id="emerging-tech" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/portrait-person-ai-robot.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Future Proof Your Business</h2>
                                             <p className="text-white">Leverage AI, Blockchain, IoT, and more with cutting edge solutions from Tech2Globe.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Ecommerce & CMS Development</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a href="/ai-chatbot-development" className="menu-link">AI Chatbot Development</a></li>
                                             <li><a href="/ar-vr-app-development-company" className="menu-link">AR/VR Development</a></li>
                                             <li><a className="menu-link" href="/aws-development-services">AWS Development</a></li>
                                             <li><a className="menu-link" href="/blockchain-development-services">BlockChain Development</a></li>
                                             <li><a className="menu-link" href="/iot-development-services">IOT Development</a></li>
                                             <li><a className="menu-link" href="/iwatch-application-development-services">iWatch App Development</a></li>
                                             <li><a className="menu-link" href="/wearable-app-development-services">Wearable App Development</a></li>
                                             <li><a className="menu-link" href="/machine-learning-services-and-consultation">Machine Learning</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade" id="uiux" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/representations-user-experience-interface-design.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Design That Captivates & Converts</h2>
                                             <p className="text-white">Enhance user experience with stunning, intuitive designs from Tech2Globe.</p>

                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="/software-development" className="text-decoration-none">Frontend Designing</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a href="/web-development" className="menu-link">Responsive Web Designing</a></li>
                                             <li><a href="/graphic-design-services" className="menu-link">Graphic Design</a></li>
                                             <li><a className="menu-link" href="/corporate-branding">Corporate Branding</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane h-100 fade" id="testing" role="tabpanel">
                                 <div className="h-100">
                                    <div className="row justify-content-between py-2 h-100">

                                       <div className="col-md-3 m-0">
                                          <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/mockup-devices-modern-responsive-website.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                             <h2 className="text-white mb-4">Flawless Web & Mobile Experiences</h2>
                                             <p className="text-white">Ensure seamless performance and a bug free experience with expert testing from Tech2Globe.</p>
                                          </div>
                                       </div>

                                       <div className="col-md-2 pb-2 bg-light-blue">
                                          <div className="menu-container">
                                             <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                             <h5 className="menu-header">
                                                <a href="#!" className="text-decoration-none">Testing Services</a>
                                             </h5>
                                          </div>
                                          <ul className="list-unstyled ps-2 menu-items">
                                             <li><a href="/automation-testing-services" className="menu-link">Automation Testing</a></li>
                                             <li><a href="/manual-testing-services" className="menu-link">Manual Testing</a></li>
                                             <li><a className="menu-link" href="/ecommerce-testing-services">Ecommerce Testing</a></li>
                                             <li><a className="menu-link" href="/selenium-testing-services">Selenium Testing</a></li>
                                          </ul>
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>

                                       <div className="col-md-2 pb-2">
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li className="HasMegaChild">
                        <Link href="#">Digital Marketing</Link>
                        <div className="container-fluid megamenu">
                           <div className="row justify-content-between py-2 h-100">
                              {/* CTA Column */}
                              <div className="col-md-3 m-0">
                                 <div className="p-4 rounded cta h-100 branding" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/social-media-marketing-concept-marketing-with-applications.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                    <h2 className="text-white mb-4">Boost Your Brand with ROI Driven Marketing Expertise</h2>
                                    <p className="text-white">Get high converting campaigns, <strong>SEO strategies</strong>, and targeted ads for rapid growth.</p>
                                    {/* <?php renderEmailForm(15, "Branding") */}
                                 </div>
                              </div>
                              {/* Services Column 1 */}
                              <div className="col-md-2 pb-2 bg-light-blue">
                                 <div className="menu-container">
                                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                    <h5 className="menu-header">
                                       <a href="seo-services" className="text-decoration-none">Search Engine Optimization</a>
                                    </h5>
                                 </div>
                                 <ul className="list-unstyled ps-2 menu-items">
                                    <li><a href="local-seo" className="menu-link">Local SEO</a></li>
                                    <li><a href="technical-seo" className="menu-link">Technical
                                       SEO</a></li>
                                    <li><a className="menu-link" href="ecommerce-seo-services">ECommerce
                                       SEO Services</a></li>
                                    <li><a className="menu-link" href="seo-by-industry">SEO By
                                       Industry</a></li>
                                    <li><a className="menu-link" href="seo-for-small-business">SEO
                                       For Small Business</a></li>
                                    <li><a className="menu-link" href="link-building-services">Link
                                       Building Services</a></li>
                                    <li><a className="menu-link" href="mobile-seo-services">Mobile
                                       SEO Services</a></li>
                                 </ul>
                                 <div className="menu-container">
                                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                    <h5 className="menu-header">
                                       <a href="#!" className="text-decoration-none">Social Media</a>
                                    </h5>
                                 </div>
                                 <ul className="list-unstyled ps-2 menu-items">
                                    <li><a className="menu-link" href="smo-services">Social
                                       Media Optimization</a></li>
                                    <li><a className="menu-link" href="social-media-marketing">Social
                                       Media Marketing</a></li>
                                    <li><a className="menu-link" href="influencer-marketing-agency">Influencer
                                       Marketing Agency</a></li>
                                    <li><a className="menu-link" href="ecommerce-social-media-marketing">Ecommerce
                                       Social Media Marketing</a></li>
                                    <li><a className="menu-link" href="tiktok-shop-management-services">TikTok Shop Management Services</a></li>
                                    <li><a className="menu-link" href="linkedin-marketing-services">LinkedIn Marketing Services</a></li>
                                    <li><a className="menu-link" href="instagram-marketing-services">Instagram Marketing Services</a></li>
                                    <li><a className="menu-link" href="facebook-marketing-and-advertising-services">Facebook Marketing &amp; Advertising Services</a></li>
                                    <li><a className="menu-link" href="youtube-marketing-services">YouTube Marketing Services </a></li>
                                    <li><a className="menu-link" href="x-marketing-services">X(Twitter) Marketing Services </a></li>
                                 </ul>
                              </div>
                              {/* Services Column 2 */}
                              <div className="col-md-2 pb-2">
                                 <div className="menu-container">
                                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                    <h5 className="menu-header">
                                       <a href="ppc-services" className="text-decoration-none">Pay Per Click (PPC)</a>
                                    </h5>
                                 </div>
                                 <ul className="list-unstyled ps-2 menu-items">
                                    <li><a className="menu-link" href="remarketing-services">Remarketing
                                       Services</a></li>
                                    <li><a className="menu-link" href="shopping-ads-services">Shopping
                                       Ads Services</a></li>
                                    <li><a className="menu-link" href="youtube-advertising-services">YouTube
                                       Advertising Services</a></li>
                                    <li><a className="menu-link" href="ecommerce-social-media-marketing">Ecommerce
                                       Social Media Marketing</a></li>
                                    <li><a className="menu-link" href="display-advertising-services">Display
                                       Advertising Services</a>
                                    </li>
                                 </ul>
                                 <div className="menu-container">
                                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                    <h5 className="menu-header">
                                       <a href="digital-marketing-services" className="text-decoration-none">Digital Marketing Services</a>
                                    </h5>
                                 </div>
                                 <div className="menu-container">
                                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                    <h5 className="menu-header">
                                       <a href="startup-consulting" className="text-decoration-none">Startup Consulting</a>
                                    </h5>
                                 </div>
                                 <div className="menu-container">
                                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                    <h5 className="menu-header">
                                       <a href="#" className="text-decoration-none">Email Marketing</a>
                                    </h5>
                                 </div>
                                 <ul className="list-unstyled ps-2 menu-items">
                                    <li><a className="menu-link" href="email-marketing-design">Email
                                       Marketing Design</a></li>
                                    <li><a className="menu-link" href="email-marketing-services">Email
                                       Marketing Services</a></li>
                                 </ul>
                              </div>
                              {/* Services Column 3 */}
                              <div className="col-md-2 pb-2 bg-light-blue">
                                 <div className="menu-container">
                                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                    <h5 className="menu-header">
                                       <a href="digital-marketing-packages" className="text-decoration-none">ORM</a>
                                    </h5>
                                 </div>
                                 <ul className="list-unstyled ps-2 menu-items">
                                    <li><a className="menu-link" href="brand-reputation-management">Brand
                                       Reputation Management</a></li>
                                    <li><a className="menu-link" href="corporate-reputation-management-services">Corporate
                                       Reputation Management Services</a></li>
                                    <li><a className="menu-link" href="orm-services">ORM
                                       Services</a></li>
                                 </ul>
                                 <div className="menu-container">
                                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                    <h5 className="menu-header">
                                       <a href="digital-marketing-packages" className="text-decoration-none">Digital Marketing Packages</a>
                                    </h5>
                                 </div>
                                 <ul className="list-unstyled ps-2 menu-items">
                                    <li><a className="menu-link" href="influencer-marketing-package">Influencer
                                       Marketing Packages</a></li>
                                    <li><a className="menu-link" href="seo-packages">SEO
                                       Packages</a></li>
                                    <li><a className="menu-link" href="social-media-marketing-packages">Social
                                       Media Marketing Packages</a></li>
                                    <li><a className="menu-link" href="guest-posting-packages">Guest
                                       Posting Packages</a></li>
                                    <li><a className="menu-link" href="ppc-packages">PPC
                                       Packages</a></li>
                                    <li><a className="menu-link" href="smo-packages">SMO
                                       Packages</a></li>
                                    <li><a className="menu-link" href="performance-marketing-packages">Performance
                                       Marketing Packages</a></li>
                                    <li><a className="menu-link" href="ecommerce-ppc-packages">Ecommerce
                                       PPC Packages</a></li>
                                    <li><a className="menu-link" href="ecommerce-seo-packages">Ecommerce
                                       SEO Packages</a></li>
                                    <li><a className="menu-link" href="local-seo-packages">Local
                                       SEO Packages</a></li>
                                 </ul>
                              </div>
                              {/* Services Column 4 */}
                              <div className="col-md-2 pb-2">
                                 <div className="menu-container">
                                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                    <h5 className="menu-header">
                                       <a href="#!" className="text-decoration-none">Industries</a>
                                    </h5>
                                 </div>
                                 <ul className="list-unstyled ps-2 menu-items">
                                    <li><a className="menu-link" href="digital-marketing-for-law-firms">Digital Marketing for Law Firms</a></li>
                                 </ul>
                                 <div className="menu-container">
                                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                    <h5 className="menu-header">
                                       <a href="#!" className="text-decoration-none">Locations</a>
                                    </h5>
                                 </div>
                                 <ul className="list-unstyled ps-2 menu-items">
                                    <li><a className="menu-link" href="miami-digital-marketing-agency">Miami</a></li>
                                    <li><a className="menu-link" href="oakland-digital-marketing-agency">Oakland</a></li>
                                    <li><a className="menu-link" href="san-diego-digital-marketing-agency">San
                                       Diego</a></li>
                                    <li><a className="menu-link" href="minneapolis-digital-marketing-agency">Minneapolis</a></li>
                                    <li><a className="menu-link" href="chicago-digital-marketing-agency">Chicago</a></li>
                                    <li><a className="menu-link" href="los-angeles-digital-marketing-agency">Los
                                       Angeles</a></li>
                                    <li><a className="menu-link" href="portland-digital-marketing-agency">Portland</a></li>
                                    <li><a className="menu-link" href="new-york-digital-marketing-agency">New
                                       York</a></li>
                                 </ul>
                                 <div className="menu-container">
                                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                    <h5 className="menu-header">
                                       <a href="#" className="text-decoration-none">Content</a>
                                    </h5>
                                 </div>
                                 <ul className="list-unstyled ps-2 menu-items">
                                    <li><a className="menu-link" href="guest-posting-services">Guest
                                       Posting Services</a></li>
                                    <li><a className="menu-link" href="content-marketing-services">Content
                                       Marketing Services</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>

                     </li>
                     <li className="HasMegaChild">
                        <a href="#!">Lets Talk AI</a>
                        <div className="container-fluid megamenu">
                           <div className="h-100">
                              <div className="row justify-content-between py-2 h-100">
                                 <div className="col-md-3 m-0">
                                    <div className="p-4 rounded cta h-100" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/images/ai-menubg.webp)', borderRadius: 15, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                                       <h2 className="text-white mb-4">Smart AI-Powered Services</h2>
                                       <p className="text-white">Transform your operations with advanced AI solutions designed to automate processes, enhance customer experiences, and unlock valuable insights from your data.</p>
                                    </div>
                                 </div>
                                 <div className="col-md-2 pb-2 bg-light-blue">
                                    <div className="menu-container">
                                       <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                       <h5 className="menu-header">
                                          <a href="/custom-ai-development" className="text-decoration-none">Custom AI Development</a>
                                       </h5>
                                    </div>
                                    <ul className="list-unstyled ps-2 menu-items">
                                       <li><a className="menu-link" href="/ai-application-development">AI Application Development</a>
                                       </li>
                                       <li><a className="menu-link" href="/generative-ai-solutions">Generative AI Solutions</a>
                                       </li>
                                       <li><a className="menu-link" href="/prompt-engineering-services">Prompt Engineering Services</a>
                                       </li>
                                       <li><a className="menu-link" href="/ai-api-integration">AI API Integration</a>
                                       </li>
                                       <li><a className="menu-link" href="/ai-chatbot-development">AI Chatbot Development</a>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="col-md-2 pb-2">
                                    <div className="menu-container">
                                       <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                       <h5 className="menu-header">
                                          <a href="/conversational-ai-solutions" className="text-decoration-none">Conversational AI Solutions</a>
                                       </h5>
                                    </div>
                                    <ul className="list-unstyled ps-2 menu-items">
                                       <li><a className="menu-link" href="/customer-support-ai-chatbots">Customer Support AI Chatbots</a>
                                       </li>
                                       <li><a className="menu-link" href="/voice-bots-ai-ivr">Voice Bots & AI IVR</a>
                                       </li>
                                       <li><a className="menu-link" href="/whatsapp-web-app-chatbots">WhatsApp / Web / App Chatbots</a>
                                       </li>
                                       <li><a className="menu-link" href="/ai-helpdesk-automation">AI Helpdesk Automation</a>
                                       </li>
                                       <li><a className="menu-link" href="/multilingual-nlp-chatbots">Multilingual NLP Chatbots</a>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="col-md-2 pb-2 bg-light-blue">
                                    <div className="menu-container">
                                       <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                       <h5 className="menu-header">
                                          <a href="/ai-for-ecommerce" className="text-decoration-none">AI for Ecommerce</a>
                                       </h5>
                                    </div>
                                    <ul className="list-unstyled ps-2 menu-items">
                                       <li><a className="menu-link" href="/ai-product-recommendations">AI Product Recommendations</a>
                                       </li>
                                       <li><a className="menu-link" href="/ai-powered-catalog-optimization">AI-Powered Catalog Optimization</a>
                                       </li>
                                       <li><a className="menu-link" href="/ai-sales-forecasting">AI Sales Forecasting</a>
                                       </li>
                                    </ul>
                                    <div className="menu-container">
                                       <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                       <h5 className="menu-header">
                                          <a href="/ai-powered-catalog-optimization" className="text-decoration-none">AI-Powered Digital Marketing</a>
                                       </h5>
                                    </div>
                                    <ul className="list-unstyled ps-2 menu-items">
                                       <li><a className="menu-link" href="/ai-content-generation">AI Content Generation</a>
                                       </li>
                                       <li><a className="menu-link" href="/ai-seo-automation">AI SEO Automation</a>
                                       </li>
                                       <li><a className="menu-link" href="/ai-ad-campaign-optimization">AI Ad Campaign Optimization</a>
                                       </li>
                                       <li><a className="menu-link" href="/marketing-automation-with-ai">Marketing Automation with AI</a>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="col-md-2 pb-2">
                                    <div className="menu-container">
                                       <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                       <h5 className="menu-header">
                                          <a href="/data-ai-automation" className="text-decoration-none">Data & AI Automation</a>
                                       </h5>
                                    </div>
                                    <ul className="list-unstyled ps-2 menu-items">
                                       <li><a className="menu-link" href="/process-automation-consulting">Process Automation Consulting</a>
                                       </li>
                                       <li><a className="menu-link" href="/ai-data-entry-automation">AI Data Entry Automation</a>
                                       </li>
                                       <li><a className="menu-link" href="/workflow-automation">Workflow Automation</a>
                                       </li>
                                       <li><a className="menu-link" href="/web-application-development">AI Data Annotation</a>
                                       </li>
                                       <li><a className="menu-link" href="/data-cleansing-for-ai">Data Cleansing for AI</a>
                                       </li>
                                    </ul>
                                    <div className="menu-container">
                                       <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                                       <h5 className="menu-header">
                                          <a href="/ai-support-managed-services" className="text-decoration-none">AI Support & Managed Services</a>
                                       </h5>
                                    </div>
                                    <ul className="list-unstyled ps-2 menu-items">
                                       <li><a className="menu-link" href="/ai-operations-aiops">AI Operations (AIOps)</a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>

                     <li className="HasChild">
                        <Link href="#">Resources</Link>
                        <ul className="Dropdown">
                           <li><Link href="faq">FAQ</Link></li>
                           <li><Link href="testimonial">Testimonial</Link></li>
                           <li><Link href="case-studies">Case Studies</Link></li>
                           <li><Link href="/portfolio">Portfolio</Link></li>
                           <li><Link href="https://blog.tech2globe.com/">Blogs</Link></li>
                        </ul>
                     </li>
                     <li><Link href="contact-us">Contact</Link></li>
                  </ul>
               </div>


               <button className="navbar-toggler d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"

                  aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">

                  <span className="navbar-toggler-icon"></span>

               </button>
            </nav>






            {/* This is a Offcanvas Mobile Menu */}



            <div className="offcanvas offcanvas-end offcanvasmobilecontainer" tabIndex="-1" id="offcanvasNavbar"
               aria-labelledby="offcanvasNavbarLabel">
               <div className="offcanvas-header mob__client__logos__container row">
                  <button type="button" className="btn-close logs__client__close__btn" data-bs-dismiss="offcanvas"
                     aria-label="Close"></button>
               </div>
               <a href="/scam-alert" className="button-red scam-btn mb-2" type="submit">Scam Alert</a>
               <div className="offcanvas-body offcanvas-body-scrollbar dropdown__services__for__mobile">
                  <nav>
                     <div className="nav nav-tabs d-flex justify-content-between mobiletabcontainer" id="nav-tab"
                        role="tablist">
                        <button className="nav-link text-secondary" id="nav-home-tab" data-bs-toggle="tab"
                           data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                           aria-selected="true">About</button>
                        <button className="nav-link text-secondary active" id="nav-profile-tab" data-bs-toggle="tab"
                           data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                           aria-selected="false">Services</button>
                        <button className="nav-link text-secondary" id="nav-technologies-tab" data-bs-toggle="tab"
                           data-bs-target="#nav-technologies" type="button" role="tab" aria-controls="nav-technologies"
                           aria-selected="false">Technologies</button>
                        <button className="nav-link text-secondary" id="nav-aiservice-tab" data-bs-toggle="tab"
                           data-bs-target="#nav-aiservice" type="button" role="tab" aria-controls="nav-aiservice"
                           aria-selected="false">Let's Talk AI</button>
                     </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                     <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                        tabIndex="0">
                        <div className="accordion" id="accordionNavProfile">
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseAboutOne" aria-expanded="false"
                                    aria-controls="collapseAboutOne">
                                    <a className="nav-link dropdown-toggle" href="/about-us" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false"><strong>About
                                          Tech2Globe</strong></a>
                                 </button>
                              </h2>
                              <div id="collapseAboutOne" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionNavProfile">
                                 <div className="accordion-body py-0">
                                    <ul>
                                       <li><a
                                          href="/our-partnerships">Our Partnerships</a>
                                       </li>
                                       <li><a
                                          href="/Infrastructure">Infrastructure</a>
                                       </li>
                                       <li><a href="/our-values">Our Values</a></li>
                                       <li><a href="/associations-ascription">Associations
                                          Ascription</a>
                                       </li>
                                       <li><a href="/clients">Clients</a></li>
                                       <li><a href="/csr-initiatives">CSR
                                          Initiatives</a>
                                       </li>
                                       <li><a href="/5years-milemakers">5 Years
                                          Milemakers </a>
                                       </li>
                                       <li><a href="/our-team">Our Team </a></li>
                                       {/* <li><a href="/life-at-tech2globe">Life at
                                          Tech2Globe </a>
                                       </li> */}
                                       <li><a href="/career">Career </a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseResources1-1" aria-expanded="false"
                                    aria-controls="collapseResources1-1">
                                    <a className="nav-link dropdown-toggle"
                                       href="/Resources" role="button"
                                       data-bs-toggle="dropdown"
                                       aria-expanded="false"><strong>Resources</strong></a>
                                 </button>
                              </h2>
                              <div id="collapseResources1-1" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body py-0">
                                    <ul>
                                       <li><a href="/faq">FAQ</a></li>
                                       <li><a href="/testimonial">Testimonials</a>
                                       </li>
                                       <li><a href="/case-studies">Case
                                          Studies</a>
                                       </li>
                                       <li><a href="/portfolio">Portfolio</a> </li>
                                       <li><a href="https://blog.tech2globe.com/">Blogs</a></li>
                                       <li><a href="/startup-consulting">Startup
                                          Consulting</a>
                                       </li>
                                       <li><a href="/contact-us">Contact</a> </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                        tabIndex="0">
                        <div className="accordion" id="accordionNavProfile">
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#amazonConsultingOne" aria-expanded="false"
                                    aria-controls="amazonConsultingOne">
                                    <a className="nav-link dropdown-toggle" href="#!" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false"><strong>Amazon & Walmart Consulting</strong></a>
                                 </button>
                              </h2>
                              <div id="amazonConsultingOne" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/amazon-virtual-assistance"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#amazonConsultingOne1-4" aria-expanded="false"
                                                aria-controls="amazonConsultingOne1-4">Amazon Product Management </a>
                                             <div id="amazonConsultingOne1-4" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/amazon-copywriting">Amazon
                                                      Copywriting </a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-product-catalog">Amazon
                                                      Product Cataloging</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-product-translation">Amazon
                                                      Product Translation</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-review-rating">Amazon Review & Rating Management</a></li>
                                                   <li><a
                                                      href="/amazon-seo-listing-optimization">Amazon
                                                      SEO & Listing Optimization</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/amazon-consulting-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#amazonConsultingOne1-1" aria-expanded="false"
                                                aria-controls="amazonConsultingOne1-1">Amazon Consulting
                                             </a>
                                             <div id="amazonConsultingOne1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/seller-reinstatement">Seller
                                                      Account Reinstatement</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-vendor-central-management">Vendor
                                                      Account Management</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-dropshipping">Amazon
                                                      Dropshipping</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-fba-consulting">Amazon
                                                      FBA Consulting</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-sell-global-services">Amazon
                                                      Global Business</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-virtual-assistance">Amazon
                                                      Virtual Assistance</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-transparency-program">Amazon
                                                      Transparency Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-fba-support">Amazon
                                                      FBA Support</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-vendor-recovery">Amazon
                                                      Vendor Recovery</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/amazon-sales-boost-strategy"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#amazonConsultingOne1-2" aria-expanded="false"
                                                aria-controls="amazonConsultingOne1-2">Amazon Sales Boost </a>
                                             <div id="amazonConsultingOne1-2" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/amazon-marketing-services">Amazon
                                                      Marketing Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-advertising-services">Amazon
                                                      Advertising Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-product-pricing-strategy">Amazon
                                                      Product & Pricing</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-account-management">Amazon
                                                      Account Management</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-ppc-services">Amazon
                                                      PPC Services</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/amazon-sell-global-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#amazonConsultingOne1-3" aria-expanded="false"
                                                aria-controls="amazonConsultingOne1-3">Amazon Graphics </a>
                                             <div id="amazonConsultingOne1-3" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/store-creation">Store
                                                      Creation </a>
                                                   </li>
                                                   <li><a
                                                      href="/enhanced-brand-content">Enhanced
                                                      Brand Content</a>
                                                   </li>
                                                   <li><a
                                                      href="/image-editing-services">Amazon
                                                      Image Editing Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/premium-plus-content-services">Premium
                                                      A+ Content</a>
                                                   </li>
                                                   <li><a
                                                      href="/aplus-cataloging">A+
                                                      Cataloging</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/walmart-full-service-management"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#amazonConsultingOne1-5" aria-expanded="false"
                                                aria-controls="amazonConsultingOne1-5">Walmart Full Service Management</a>
                                             <div id="amazonConsultingOne1-5" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/walmart-advertisement">Walmart Advertising</a>
                                                   </li>
                                                   <li><a href="/walmart-full-service-management">Walmart Full Service Management</a>
                                                   </li>
                                                   <li><a href="/walmart-marketplace-management">Walmart Marketplace Management</a>
                                                   </li>
                                                   <li><a href="/walmart-product-upload-seo">Walmart Product Upload & SEO</a>
                                                   </li>
                                                   <li><a href="/walmart-store-management">Walmart Store Management</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo2-2" aria-expanded="false"
                                    aria-controls="collapseTwo2-2">
                                    <a className="nav-link dropdown-toggle" href="#!" role="button"
                                       data-bs-toggle="dropdown"
                                       aria-expanded="false"><strong>Ecommerce</strong></a>
                                 </button>
                              </h2>
                              <div id="collapseTwo2-2" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/product-data-entry-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#amazonConsultingOne2-1" aria-expanded="false"
                                                aria-controls="amazonConsultingOne2-1">Product Data Management</a>
                                             <div id="amazonConsultingOne2-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/shopify-product-upload-services">Shopify</a></li>
                                                   <li><a href="/magento-product-upload-services">Magento</a></li>
                                                   <li><a href="/bigcommerce-product-upload-services">Bigcommerce</a></li>
                                                   <li><a href="/woocommerce-product-upload-services">WooCommerce</a></li>
                                                   <li><a href="/walmart-product-upload-services">Walmart</a></li>
                                                   <li><a href="/cdiscount-product-upload-services">cDiscount</a></li>
                                                   <li><a href="/prestashop-product-upload-services">Prestashop</a></li>
                                                   <li><a href="/jet-product-upload-services">Jet.com</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/ecommerce-marketplace-management"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#amazonConsultingOne2-2" aria-expanded="false"
                                                aria-controls="amazonConsultingOne2-2">Marketplaces Management Services</a>
                                             <div id="amazonConsultingOne2-2" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/amazon-seller-central-management">Amazon Seller Central Management</a></li>
                                                   <li><a href="/amazon-vendor-central-management">Amazon Vendor Central Management</a></li>
                                                   <li><a href="/ebay-marketplace-management">eBay Marketplace Management</a></li>
                                                   <li><a href="/walmart-marketplace-management">Walmart Marketplace Management</a></li>
                                                   <li><a href="/sears-marketplace-management">Sears Marketplace Management</a></li>
                                                   <li><a href="/newegg-marketplace-management">Newegg Marketplace Management</a></li>
                                                   <li><a href="/rakuten-marketplace-management">Rakuten Marketplace Management</a></li>
                                                   <li><a href="/overstock-marketplace-management">Overstock Marketplace Management</a></li>
                                                   <li><a href="/bestbuy-marketplace-management">Bestbuy Marketplace Management</a></li>
                                                   <li><a href="/cdiscount-marketplace-management">cDiscount Marketplace Management</a></li>
                                                   <li><a href="/wayfair-marketplace-management">Wayfair Marketplace Management</a></li>
                                                   <li><a href="/lazada-marketplace-management">Lazada Marketplace Management</a></li>
                                                   <li><a href="/sharafdg-marketplace-management">SharafDG Marketplace Management</a></li>
                                                   <li><a href="/noon-marketplace-management">Noon Marketplace Management</a></li>
                                                   <li><a href="/myntra-account-management">Myntra Account Management</a></li>
                                                   <li><a href="/meesho-account-management">Meesho Account Management</a></li>
                                                   <li><a href="/flipkart-seller-account-management">Flipkart Seller Account Management</a></li>
                                                   <li><a href="/onbuy-marketplace-management">OnBuy Marketplace Management</a></li>
                                                   <li><a href="/quick-commerce-onboarding-services">Quick Commerce Onboarding</a></li>
                                                   <li><a href="/costco-vendor-onboarding-services">Costco Vendor Onboarding</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#amazonConsultingOne2-3" aria-expanded="false"
                                                aria-controls="amazonConsultingOne2-3">Ecommerce Development</a>
                                             <div id="amazonConsultingOne2-3" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/magento-development-company">Magento</a></li>
                                                   <li><a href="/shopify-development-company">Shopify</a></li>
                                                   <li><a href="/woocommerce-development-services">WooCommerce</a></li>
                                                   <li><a href="/ebay-store-design-services">EBay Store Design</a></li>
                                                   <li><a href="/bigcommerce-development-services">BigCommerce</a></li>
                                                   <li><a href="/volusion-development-services">Volusion</a></li>
                                                   <li><a href="/3dcart-development-services">3Dcart</a></li>
                                                   <li><a href="/open-cart-development-services">Opencart</a></li>
                                                   <li><a href="/nop-commerce-development-services">nopCommerce</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#amazonConsultingOne2-4" aria-expanded="false"
                                                aria-controls="amazonConsultingOne2-4">Ecommerce Marketing
                                             </a>
                                             <div id="amazonConsultingOne2-4" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/ecommerce-seo-services">Ecommerce SEO</a></li>
                                                   <li><a href="/ecommerce-social-media-marketing">Ecommerce Social Media</a></li>
                                                   <li><a href="/shopping-ads-services">Ecommerce Shopping Ads</a></li>
                                                   <li><a href="/tiktok-shop-management-services">TikTok Shop Management Services</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#amazonConsultingOne2-5" aria-expanded="false"
                                                aria-controls="amazonConsultingOne2-5">Ecommerce Back Office Support
                                             </a>
                                             <div id="amazonConsultingOne2-5" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/customer-support">Customer Support</a></li>
                                                   <li><a href="/order-processing-services">Order Processing</a></li>
                                                   <li><a href="/catalog-management-services">Catalog Management Services</a></li>
                                                   <li><a href="/virtual-assistant-services">Hire Virtual Assistant </a></li>
                                                   <li><a href="/product-data-entry-services">Product Data Entry</a></li>
                                                   <li><a href="/logistics-services">Logistic Services</a></li>
                                                   <li><a href="/chat-support-services">Chat Support</a></li>
                                                   <li><a href="/invoice-processing-services">Invoice Processing</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree3-3" aria-expanded="false"
                                    aria-controls="collapseThree3-3">
                                    <strong>Data Management</strong>
                                 </button>
                              </h2>
                              <div id="collapseThree3-3" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/data-entry-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#dataManagement1-1"
                                                aria-expanded="false" aria-controls="dataManagement1-1">Data
                                                Entry </a>
                                             <div id="dataManagement1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/data-entry-services">Data
                                                      Entry </a>
                                                   </li>
                                                   <li><a
                                                      href="/accounting-data-entry-services">Accounting
                                                      Data Entry</a>
                                                   </li>
                                                   <li><a
                                                      href="/financial-data-entry">Financial
                                                      Data Entry</a>
                                                   </li>
                                                   <li><a
                                                      href="/logistics-services">Logistics
                                                      Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/image-data-entry-services">Image
                                                      Data Entry</a>
                                                   </li>
                                                   <li><a
                                                      href="/insurance-claims-data-entry-services">Insurance
                                                      Claims Data Entry</a>
                                                   </li>
                                                   <li><a
                                                      href="/offline-data-entry-services">Offline
                                                      Data Entry</a>
                                                   </li>
                                                   <li><a
                                                      href="/online-data-entry-services">Online
                                                      Data Entry</a>
                                                   </li>
                                                   <li><a
                                                      href="/pdf-data-entry-services">PDF
                                                      Data Entry</a>
                                                   </li>
                                                   <li><a
                                                      href="/product-data-entry-services">Product
                                                      Data Entry</a>
                                                   </li>
                                                   <li><a
                                                      href="/yellow-and-white-pages-data-entry-services">Yellow
                                                      & White Pages Data Entry</a>
                                                   </li>
                                                   <li><a
                                                      href="/medical-data-entry-services">Medical
                                                      Data Entry Services</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/business-research-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#dataManagement1-2"
                                                aria-expanded="false" aria-controls="dataManagement1-2">Business
                                                Intelligence Services</a>
                                             <div id="dataManagement1-2" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/microsoft-power-bi-consulting-services">Microsoft
                                                      Power BI Consulting</a>
                                                   </li>
                                                   <li><a
                                                      href="/tableau-consulting-services">Tableau Consulting Services</a></li>
                                                   <li><a
                                                      href="/business-research-services">Business
                                                      Research</a>
                                                   </li>
                                                   <li><a
                                                      href="/dashboard-design-services">Dashboard
                                                      Design</a>
                                                   </li>
                                                   <li><a
                                                      href="/virtual-assistant-services">Virtual
                                                      Assistant Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/chat-support-services">Chat
                                                      Support Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/lead-generation-services">Lead
                                                      Generation Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/banking-data-entry-services">Banking
                                                      Data Entry Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/data-analytics-services">Data
                                                      Analysis</a>
                                                   </li>
                                                   <li><a
                                                      href="/reporting-and-analysis-services">Reporting
                                                      And Analysis</a>
                                                   </li>
                                                   <li><a
                                                      href="/e-commerce-support-services">E-Commerce
                                                      Support</a>
                                                   </li>
                                                   <li><a
                                                      href="/donor-research-data-analytics-services">Donor
                                                      Research Data Analytics</a>
                                                   </li>
                                                   <li><a
                                                      href="/automation-through-vba-macros-services">Automation
                                                      Through VBA Macros</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/data-management-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#dataManagement1-3"
                                                aria-expanded="false" aria-controls="dataManagement1-3">Data
                                                Management</a>
                                             <div id="dataManagement1-3" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/data-management-services">Data
                                                      Management</a>
                                                   </li>
                                                   <li><a
                                                      href="/bulk-product-upload-services">Bulk
                                                      Product Upload</a>
                                                   </li>
                                                   <li><a
                                                      href="/catalog-management-services">Catalog
                                                      Management</a>
                                                   </li>
                                                   <li><a
                                                      href="/indexing-services">Indexing</a>
                                                   </li>
                                                   <li><a
                                                      href="/restaurant-menu-entry-services">Restaurant
                                                      Menu Entry</a>
                                                   </li>
                                                   <li><a
                                                      href="/sales-support-services">Sales
                                                      Support</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/data-marketing-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#dataManagement1-4"
                                                aria-expanded="false" aria-controls="dataManagement1-4">Data
                                                Marketing</a>
                                             <div id="dataManagement1-4" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/data-marketing-services">Data
                                                      Marketing </a>
                                                   </li>
                                                   <li><a
                                                      href="/custom-list-building-services">Custom
                                                      List Building</a>
                                                   </li>
                                                   <li><a
                                                      href="/event-data-management-services">Event
                                                      Data Management</a>
                                                   </li>
                                                   <li><a
                                                      href="/insurance-data-collection-services">Insurance
                                                      Data Collection</a>
                                                   </li>
                                                   <li><a
                                                      href="/lead-qualification-services">Lead
                                                      Qualification</a>
                                                   </li>
                                                   <li><a
                                                      href="/product-research-services">Product
                                                      Research</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/data-mining-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#dataManagement1-5"
                                                aria-expanded="false" aria-controls="dataManagement1-5">Data
                                                Mining</a>
                                             <div id="dataManagement1-5" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/data-mining-services">Data
                                                      Mining </a>
                                                   </li>
                                                   <li><a
                                                      href="/web-research-services">Web
                                                      Research</a>
                                                   </li>
                                                   <li><a
                                                      href="/healthcare-data-mining-services">Healthcare
                                                      Data Mining</a>
                                                   </li>
                                                   <li><a
                                                      href="/social-media-research-services">Social
                                                      Media Research</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/data-cleansing-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#dataManagement1-6"
                                                aria-expanded="false" aria-controls="dataManagement1-6">Data
                                                Cleansing</a>
                                             <div id="dataManagement1-6" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/data-cleansing-services">Data
                                                      Cleansing</a>
                                                   </li>
                                                   <li><a
                                                      href="/data-de-duplication-services">Data
                                                      De-Duplication</a>
                                                   </li>
                                                   <li><a
                                                      href="/data-standardization-services">Data
                                                      Standardization</a>
                                                   </li>
                                                   <li><a
                                                      href="/data-scrubbing-services">Data
                                                      Scrubbing</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/data-processing-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#dataManagement1-7"
                                                aria-expanded="false" aria-controls="dataManagement1-7">Data
                                                Processing</a>
                                             <div id="dataManagement1-7" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/data-processing-services">Data
                                                      Processing</a>
                                                   </li>
                                                   <li><a
                                                      href="/catalog-processing-services">Catalog
                                                      Processing</a>
                                                   </li>
                                                   <li><a
                                                      href="/data-conversion-services">Data
                                                      Conversion</a>
                                                   </li>
                                                   <li><a
                                                      href="/data-extraction-services">Data
                                                      Extraction</a>
                                                   </li>
                                                   <li><a
                                                      href="/document-processing-services">Document
                                                      Processing</a>
                                                   </li>
                                                   <li><a
                                                      href="/forms-processing-services">Forms
                                                      Processing</a>
                                                   </li>
                                                   <li><a
                                                      href="/insurance-claims-processing-services">Insurance
                                                      Claims Processing</a>
                                                   </li>
                                                   <li><a
                                                      href="/invoice-processing-services">Invoice
                                                      Processing</a>
                                                   </li>
                                                   <li><a
                                                      href="/order-processing-services">Order
                                                      Processing</a>
                                                   </li>
                                                   <li><a
                                                      href="/survey-forms-processing">Survey
                                                      Forms Processing</a>
                                                   </li>
                                                   <li><a
                                                      href="/web-scraping-services">Web
                                                      Scraping</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/transcription-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#dataManagement1-8"
                                                aria-expanded="false"
                                                aria-controls="dataManagement1-8">Transcription</a>
                                             <div id="dataManagement1-8" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/transcription-services">Transcription</a>
                                                   </li>
                                                   <li><a
                                                      href="/audio-transcription-services">Audio
                                                      Transcription</a>
                                                   </li>
                                                   <li><a
                                                      href="/youtube-transcription-services">YouTube
                                                      Transcription</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix6-66" aria-expanded="false"
                                    aria-controls="collapseSix6-66">
                                    <strong>Digital Marketing</strong>
                                 </button>
                              </h2>
                              <div id="collapseSix6-66" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#digitalMarketing1-1" aria-expanded="false"
                                                aria-controls="digitalMarketing1-1">Search Engine Optimization
                                                (SEO)</a>
                                             <div id="digitalMarketing1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/seo-services">Search
                                                      Engine Optimization</a>
                                                   </li>
                                                   <li><a href="/local-seo">Local
                                                      SEO </a>
                                                   </li>
                                                   <li><a href="/technical-seo">Technical
                                                      SEO</a>
                                                   </li>
                                                   <li><a
                                                      href="/ecommerce-seo-services">ECommerce
                                                      SEO Services</a>
                                                   </li>
                                                   <li><a href="/seo-by-industry">SEO
                                                      By Industry</a>
                                                   </li>
                                                   <li><a
                                                      href="/seo-for-small-business">SEO
                                                      For Small Business</a>
                                                   </li>
                                                   <li><a
                                                      href="/link-building-services">Link
                                                      Building Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/mobile-seo-services">Mobile
                                                      SEO Services</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#digitalMarketing1-2" aria-expanded="false"
                                                aria-controls="digitalMarketing1-2">Pay Per click (PPC)</a>
                                             <div id="digitalMarketing1-2" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/ppc-services">Pay
                                                      Per click (PPC)</a>
                                                   </li>
                                                   <li><a
                                                      href="/remarketing-services">Remarketing
                                                      Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/shopping-ads-services">Shopping
                                                      Ads Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/youtube-advertising-services">YouTube
                                                      Advertising Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/ecommerce-social-media-marketing">Ecommerce
                                                      Social Media
                                                      Marketing</a>
                                                   </li>
                                                   <li><a
                                                      href="/display-advertising-services">Display
                                                      Advertising Services</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#digitalMarketing1-3" aria-expanded="false"
                                                aria-controls="digitalMarketing1-3">Social Media</a>
                                             <div id="digitalMarketing1-3" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/smo-services">Social
                                                      Media Optimization</a>
                                                   </li>
                                                   <li><a
                                                      href="/social-media-marketing">Social
                                                      Media Marketing</a>
                                                   </li>
                                                   <li><a
                                                      href="/influencer-marketing-agency">Influencer
                                                      Marketing
                                                      Agency</a>
                                                   </li>
                                                   <li><a
                                                      href="/ecommerce-social-media-marketing">Ecommerce
                                                      Social Media Marketing</a>
                                                   </li>
                                                   <li><a href="/tiktok-shop-management-services">TikTok Shop Management Services</a></li>
                                                   <li><a href="/linkedin-marketing-services">LinkedIn Marketing Services</a></li>
                                                   <li><a href="/instagram-marketing-services">Instagram Marketing Services</a></li>
                                                   <li><a href="/facebook-marketing-and-advertising-services">Facebook Marketing & Advertising Services</a></li>
                                                   <li><a href="/youtube-marketing-services">YouTube Marketing Services </a></li>
                                                   <li><a href="/x-marketing-services">X(Twitter) Marketing Services </a></li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#digitalMarketing1-4" aria-expanded="false"
                                                aria-controls="digitalMarketing1-4">Industries</a>
                                             <div id="digitalMarketing1-4" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/digital-marketing-for-law-firms">Digital Marketing for Law Firms</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#digitalMarketing1-4" aria-expanded="false"
                                                aria-controls="digitalMarketing1-4">Locations</a>
                                             <div id="digitalMarketing1-4" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/miami-digital-marketing-agency">Miami</a>
                                                   </li>
                                                   <li><a
                                                      href="/oakland-digital-marketing-agency">Oakland</a>
                                                   </li>
                                                   <li><a
                                                      href="/san-diego-digital-marketing-agency">San
                                                      Diego</a>
                                                   </li>
                                                   <li><a
                                                      href="/minneapolis-digital-marketing-agency">Minneapolis</a>
                                                   </li>
                                                   <li><a
                                                      href="/chicago-digital-marketing-agency">Chicago</a>
                                                   </li>
                                                   <li><a
                                                      href="/los-angeles-digital-marketing-agency">Los
                                                      Angeles</a>
                                                   </li>
                                                   <li><a
                                                      href="/Portland-digital-marketing-agency">Portland</a>
                                                   </li>
                                                   <li><a
                                                      href="/new-york-digital-marketing-agency">New
                                                      York</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/digital-marketing-packages"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#digitalMarketing1-5"
                                                aria-expanded="false"
                                                aria-controls="digitalMarketing1-5">Digital
                                                Marketing Packages</a>
                                             <div id="digitalMarketing1-5" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/influencer-marketing-package">Influencer
                                                      Marketing Packages</a>
                                                   </li>
                                                   <li><a href="/seo-packages">SEO
                                                      Packages</a>
                                                   </li>
                                                   <li><a
                                                      href="/social-media-marketing-packages">Social
                                                      Media Marketing Packages</a>
                                                   </li>
                                                   <li><a
                                                      href="/guest-posting-packages">Guest
                                                      Posting
                                                      Packages</a>
                                                   </li>
                                                   <li><a href="/ppc-packages">PPC
                                                      Packages</a>
                                                   </li>
                                                   <li><a href="/smo-packages">SMO
                                                      Packages</a>
                                                   </li>
                                                   <li><a
                                                      href="/performance-marketing-packages">Performance
                                                      Marketing Packages</a>
                                                   </li>
                                                   <li><a
                                                      href="/ecommerce-ppc-packages">Ecommerce
                                                      PPC
                                                      Packages</a>
                                                   </li>
                                                   <li><a
                                                      href="/ecommerce-seo-packages">Ecommerce
                                                      SEO
                                                      Packages</a>
                                                   </li>
                                                   <li><a
                                                      href="/local-seo-packages">Local
                                                      SEO
                                                      Packages</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <a href="/digital-marketing-services">Digital Marketing Services</a>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/digital-marketing-packages"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#digitalMarketing-orm"
                                                aria-expanded="false"
                                                aria-controls="digitalMarketing-orm">ORM</a>
                                             <div id="digitalMarketing-orm" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/brand-reputation-management">Brand
                                                      Reputation
                                                      Management</a>
                                                   </li>
                                                   <li><a
                                                      href="/corporate-reputation-management-services">Corporate
                                                      Reputation Management Services</a>
                                                   </li>
                                                   <li><a href="/orm-services">ORM
                                                      Services</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#digitalMarketing1-6" aria-expanded="false"
                                                aria-controls="digitalMarketing1-6">Content</a>
                                             <div id="digitalMarketing1-6" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/guest-posting-services">Guest
                                                      Posting Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/content-marketing-services">Content
                                                      Marketing Services</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#digitalMarketing1-7" aria-expanded="false"
                                                aria-controls="digitalMarketing1-7">Email
                                                Marketing</a>
                                             <div id="digitalMarketing1-7" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/email-marketing-design">Email
                                                      Marketing Design</a>
                                                   </li>
                                                   <li><a
                                                      href="/email-marketing-services">Email
                                                      Marketing Services</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour4-4" aria-expanded="false"
                                    aria-controls="collapseFour4-4">
                                    <strong>BPO - KPO</strong>
                                 </button>
                              </h2>
                              <div id="collapseFour4-4" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/call-centre-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#bpo1-1"
                                                aria-expanded="false" aria-controls="bpo1-1">Call Center
                                                Services</a>
                                             <div id="bpo1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/call-centre-services">Call
                                                      Centre Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/inbound-call-center">Inbound
                                                      Call Center</a>
                                                   </li>
                                                   <li><a
                                                      href="/outbound-call-center-solutions">Outbound
                                                      Call Center</a>
                                                   </li>
                                                   <li><a
                                                      href="/telemarketing-services">Telemarketing
                                                      Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/lead-generation-services">Lead
                                                      Generation Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/customer-support">Customer
                                                      Support</a>
                                                   </li>
                                                   <li><a
                                                      href="/virtual-assistant-services">Virtual
                                                      Assistant Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/call-center-monitoring">Call
                                                      Center Monitoring</a>
                                                   </li>
                                                   <li><a
                                                      href="/call-center-consulting">Call
                                                      Center Consulting</a>
                                                   </li>
                                                   <li><a
                                                      href="/super-agent-services">Super
                                                      Agent Services</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li><a href="/cctv-monitoring-services">CCTV
                                          Monitoring</a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive5-5" aria-expanded="false"
                                    aria-controls="collapseFive5-5">
                                    <strong>Finance & Accounting</strong>
                                 </button>
                              </h2>
                              <div id="collapseFive5-5" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/financial-accounting-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#financialAccountingServices1-1"
                                                aria-expanded="false"
                                                aria-controls="financialAccountingServices1-1">Finance And
                                                Accounting Services</a>
                                             <div id="financialAccountingServices1-1"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/financial-accounting-services">Finance
                                                      And Accounting Services </a>
                                                   </li>
                                                   <li><a
                                                      href="/bookkeeping-services">Book
                                                      Keeping Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/accounting-services">Accounting
                                                      Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/accounts-payable-services">Accounts
                                                      Payable</a>
                                                   </li>
                                                   <li><a
                                                      href="/accounts-receivable-services">Accounts
                                                      Receivable</a>
                                                   </li>
                                                   <li><a href="/tax-preparation">Tax
                                                      Preparation</a>
                                                   </li>
                                                   <li><a
                                                      href="/financial-analysis-services">Financial
                                                      Analysis</a>
                                                   </li>
                                                   <li><a
                                                      href="/payroll-processing-services">Payroll
                                                      Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/accounting-software">Accounting
                                                      Software</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseSeven7-7" aria-expanded="false"
                                    aria-controls="collapseSeven7-7">
                                    <strong>Web & Mobile Development</strong>
                                 </button>
                              </h2>
                              <div id="collapseSeven7-7" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/software-development"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#wmdev1-1"
                                                aria-expanded="false" aria-controls="wmdev1-1">Software
                                                Development</a>
                                             <div id="wmdev1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/software-development">Software
                                                      Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/e-commerce-development">E-Commerce
                                                      Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/enterprise-portal-development">Enterprise
                                                      Portal Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/content-management-system">Content
                                                      Management System</a>
                                                   </li>
                                                   <li><a
                                                      href="/web-application-development">Web
                                                      Application Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/complete-ecommerce-solution-india">ECommerce
                                                      Solutions</a>
                                                   </li>
                                                   <li><a href="/it-staffing">IT
                                                      Staffing Services</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/mobile-app-development"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#wmdev1-2"
                                                aria-expanded="false" aria-controls="wmdev1-2">Mobile App
                                                Development </a>
                                             <div id="wmdev1-2" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/mobile-app-development">Mobile
                                                      App Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/android-application-development-services">Android
                                                      Apps Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/iphone-ipad-application-development-services">IPhone
                                                      IPad Apps Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/mobile-application-development-services">Mobile
                                                      Apps Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/windows-application-development-services">Windows
                                                      Apps Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/phonegap-development-services">Phonegap
                                                      Development Services</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#wmdev1-3" aria-expanded="false"
                                                aria-controls="wmdev1-3">Database Competencies</a>
                                             <div id="wmdev1-3" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/oracle-applications">Oracle</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour4-1" aria-expanded="false"
                                    aria-controls="collapseFour4-1">
                                    <strong>Data Analytics Services for IOT Devices</strong>
                                 </button>
                              </h2>
                              <div id="collapseFour4-1" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#dsfaisoftware1-1" aria-expanded="false"
                                                aria-controls="dsfaisoftware1-1">Data Analytics Services for IOT Devices</a>
                                             <div id="dsfaisoftware1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/ai-powered-video-analytics">AI
                                                      Powered Video Analytics</a>
                                                   </li>
                                                   <li><a
                                                      href="/data-support-kpo-ai-services">AI
                                                      Data Support For KPO Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/data-support-ai-services">AI
                                                      Data Support Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/chat-support-services">Chat
                                                      Support Services For AI Products</a>
                                                   </li>
                                                   <li><a
                                                      href="/customer-data-migration-services">Customer
                                                      Data Migration Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/customer-onboarding-services">Customer
                                                      Onboarding Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/project-implementation-services">Project
                                                      Implementation Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/reporting-and-analytics">Reporting
                                                      And Analytics</a>
                                                   </li>
                                                   <li><a
                                                      href="/virtual-assistant-services">Virtual
                                                      Assistant Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/voice-support-for-ai-products">Voice
                                                      Support For AI Products</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseEight8-8" aria-expanded="false"
                                    aria-controls="collapseEight8-8">
                                    <strong>Graphic & Video Editing</strong>
                                 </button>
                              </h2>
                              <div id="collapseEight8-8" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/photo-editing-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#graphicsServices1-1"
                                                aria-expanded="false" aria-controls="graphicsServices1-1">Photo
                                                Editing Services</a>
                                             <div id="graphicsServices1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/photo-editing-services">Photo
                                                      Editing Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/photo-manipulation-services">Photo
                                                      Manipulation Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/image-clipping-services">Image
                                                      Clipping Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/photo-enhancement-services">Photo
                                                      Enhancement Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/photoshop-Image-Masking-Service">Photo
                                                      Masking Process</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/image-enhancement"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#graphicsServices1-2"
                                                aria-expanded="false" aria-controls="graphicsServices1-2">Image
                                                Enhancement</a>
                                             <div id="graphicsServices1-2" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/image-enhancement">Image
                                                      Enhancement</a>
                                                   </li>
                                                   <li><a
                                                      href="/photo-restoration-services">Photo
                                                      Restoration Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/blackandwhite-imagesto-color">Black
                                                      & White Images To Color</a>
                                                   </li>
                                                   <li><a
                                                      href="/food-photo-editing-services">Food
                                                      Photo Editing Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/image-vector-services">Image
                                                      Vector Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/skin-retouching-services">Skin
                                                      Retouching Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/old-photo-restoration">Old
                                                      Photo Restoration</a>
                                                   </li>
                                                   <li><a
                                                      href="/panorama-image-stitching-services">Panoramas
                                                      Image Stitching Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/watermark-removal-services">Watermark
                                                      Removal Services</a>
                                                   </li>
                                                   <li><a href="/drop-shadow">Drop
                                                      Shadow</a>
                                                   </li>
                                                   <li><a
                                                      href="/photo-retouching">Photo
                                                      Retouching</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/graphic-design-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#graphicsServices1-3"
                                                aria-expanded="false"
                                                aria-controls="graphicsServices1-3">Graphic Services</a>
                                             <div id="graphicsServices1-3" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/graphic-design-services">Graphic
                                                      Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/amazon-ebc-services">Amazon
                                                      EBC</a>
                                                   </li>
                                                   <li><a href="https://www.zphotoedit.com/Brochure.php">Brochure Designing</a></li>
                                                   <li><a href="https://www.zphotoedit.com/Logo-services.php">Logo
                                                      Designing</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/video-editing"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#graphicsServices1-7"
                                                aria-expanded="false"
                                                aria-controls="graphicsServices1-7">Video Editing</a>
                                             <div id="graphicsServices1-7" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/3d-furniture-modeling-rendering-services">3D Furniture Modeling</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/image-clipping"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#graphicsServices1-4"
                                                aria-expanded="false" aria-controls="graphicsServices1-4">Image
                                                Clipping</a>
                                             <div id="graphicsServices1-4" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/image-clipping">Image
                                                      Clipping</a>
                                                   </li>
                                                   <li><a
                                                      href="/photo-cutout-services">Photo
                                                      Cutout Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/clipping-path-services">Clipping
                                                      Path Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/image-tracing-services">Image
                                                      Tracing Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/hair-masking-services">Hair
                                                      Masking Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/image-manipulation-services">Image
                                                      Manipulation Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/car-image-clipping">Car
                                                      Image Clipping</a>
                                                   </li>
                                                   <li><a
                                                      href="/image-masking-services">Image
                                                      Masking Services</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/real-estate-image-processing"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#graphicsServices1-5"
                                                aria-expanded="false" aria-controls="graphicsServices1-5">Real
                                                Estate</a>
                                             <div id="graphicsServices1-5" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/real-estate-image-processing">Real
                                                      Estate</a>
                                                   </li>
                                                   <li><a
                                                      href="/post-processingof-real-estate-images">Post
                                                      Processing Of Real Estate Images</a>
                                                   </li>
                                                   <li><a
                                                      href="/real-estate-day-to-night-conversion-services">Real
                                                      Estate Day To Night Conversion</a>
                                                   </li>
                                                   <li><a
                                                      href="/real-estate-photo-enhancement">Real
                                                      Estate Photo Enhancement</a>
                                                   </li>
                                                   <li><a
                                                      href="/real-estate-threesixty-degree-virtual-tours">Real
                                                      Estate 360 Virtual Tours</a>
                                                   </li>
                                                   <li><a
                                                      href="/floor-plan-conversions">Floor
                                                      Plan Conversion</a>
                                                   </li>
                                                   <li><a
                                                      href="/sky-replacement-services">Sky
                                                      Replacement Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/real-estate-photo-blending-services">Real
                                                      Estate Photo Blending Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/real-estate-HDR-image-blending">Real
                                                      Estate HDR Image Blending</a>
                                                   </li>
                                                   <li><a
                                                      href="/twodthreed-floor-plan-conversion">2D/3D
                                                      Floor Plan Conversions</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#graphicsServices1-6" aria-expanded="false"
                                                aria-controls="graphicsServices1-6">Special Service</a>
                                             <div id="graphicsServices1-6" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/bulk-image-conversion">Bulk
                                                      Image Conversion</a>
                                                   </li>
                                                   <li><a
                                                      href="/photoshop-services">Photoshop
                                                      Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/lightroom-services">Lightroom
                                                      Services</a>
                                                   </li>
                                                   <li><a
                                                      href="/threesixty-panorma">360
                                                      Panoramas</a>
                                                   </li>
                                                   <li><a href="/virtual-staging">Virtual
                                                      Staging</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>
                     <div className="tab-pane fade" id="nav-technologies" role="tabpanel"
                        aria-labelledby="nav-technologies-tab" tabIndex="0">
                        <div className="accordion" id="accordionNavProfile">
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseNine9-9" aria-expanded="false"
                                    aria-controls="collapseNine9-9">
                                    <strong>Custom Web Development</strong>
                                 </button>
                              </h2>
                              <div id="collapseNine9-9" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/web-development"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#customWebDev1-1"
                                                aria-expanded="false" aria-controls="customWebDev1-1">Web
                                                Development</a>
                                             <div id="customWebDev1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a href="/web-development">Web
                                                      Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/php-development-services">PHP</a>
                                                   </li>
                                                   <li><a
                                                      href="/java-development-services">Java</a>
                                                   </li>
                                                   <li><a
                                                      href="/angular-js-development-services">Angular
                                                      JS</a>
                                                   </li>
                                                   <li><a
                                                      href="/node-js-development-services">Node
                                                      JS</a>
                                                   </li>
                                                   <li><a
                                                      href="/react-js-development-services">React
                                                      JS</a>
                                                   </li>
                                                   <li><a
                                                      href="/ruby-on-rails-development">Ruby
                                                      On Rails</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/framework-development-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#customWebDev1-2"
                                                aria-expanded="false" aria-controls="customWebDev1-2">Framework
                                                Development</a>
                                             <div id="customWebDev1-2" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/framework-development-services">Framework
                                                      Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/laravel-development-services">Laravel</a>
                                                   </li>
                                                   <li><a
                                                      href="/codeigniter-development-services">Codeigniter</a>
                                                   </li>
                                                   <li><a
                                                      href="/cake-php-development">Cake
                                                      PHP</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/open-source-development-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#customWebDev1-3"
                                                aria-expanded="false" aria-controls="customWebDev1-3">Open
                                                Source Development</a>
                                             <div id="customWebDev1-3" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/open-source-development-services">Open
                                                      Source Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/joomla-development">Joomla</a>
                                                   </li>
                                                   <li><a
                                                      href="/drupal-development">Drupal</a>
                                                   </li>
                                                   <li><a
                                                      href="/wordpress-development">WordPress</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/microsoft-development-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#customWebDev1-4"
                                                aria-expanded="false" aria-controls="customWebDev1-4">Microsoft
                                                Technology</a>
                                             <div id="customWebDev1-4" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/microsoft-development-services">Microsoft
                                                      Technology</a>
                                                   </li>
                                                   <li><a
                                                      href="/dot-net-development-services">DotNet</a>
                                                   </li>
                                                   <li><a
                                                      href="/azure-development-services">Azure</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTen10-0" aria-expanded="false"
                                    aria-controls="collapseTen10-0">
                                    <strong>Ecommerce Solutions</strong>
                                 </button>
                              </h2>
                              <div id="collapseTen10-0" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#ecommerceSolution1-1" aria-expanded="false"
                                                aria-controls="ecommerceSolution1-1">Ecommerce & CMS
                                                Development</a>
                                             <div id="ecommerceSolution1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/magento-development-company">Magento</a>
                                                   </li>
                                                   <li><a
                                                      href="/woocommerce-development">WooCommerce</a>
                                                   </li>
                                                   <li><a
                                                      href="/shopify-development-company">Shopify</a>
                                                   </li>
                                                   <li><a
                                                      href="/volusion-development">Volusion</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <a href="/multi-vendor-b2b-solution">Multivendor
                                             & B2B Solutions</a>
                                       </li>
                                       <li>
                                          <a
                                             href="/e-commerce-mobile-apps-development-services">E-Commerce
                                             Apps</a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#mobileApplicationSolution1" aria-expanded="false"
                                    aria-controls="mobileApplicationSolution1">
                                    <strong>Mobile Application</strong>
                                 </button>
                              </h2>
                              <div id="mobileApplicationSolution1" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/cross-platform-mobile-app-development"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#mobileApplicationSolution1-1"
                                                aria-expanded="false"
                                                aria-controls="mobileApplicationSolution1-1">Cross Platform App
                                                Development</a>
                                             <div id="mobileApplicationSolution1-1"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/cross-platform-mobile-app-development">Cross
                                                      Platform App Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/react-native-app-development">React
                                                      Native App </a>
                                                   </li>
                                                   <li><a
                                                      href="/ionic-app-development-company">Ionic
                                                      App</a>
                                                   </li>
                                                   <li><a
                                                      href="/flutter-app-development-services">Flutter
                                                      App</a>
                                                   </li>
                                                   <li><a
                                                      href="/kotlin-app-development">Kotlin
                                                      App</a>
                                                   </li>
                                                   <li><a
                                                      href="/phonegap-app-development-service">PhoneGap
                                                      App</a>
                                                   </li>
                                                   <li><a
                                                      href="/xamarin-mobile-app-development">Xamarin
                                                      App</a>
                                                   </li>
                                                   <li><a
                                                      href="/hybrid-mobile-app-development">Hybrid
                                                      App</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#mobileApplicationSolution1-2"
                                                aria-expanded="false"
                                                aria-controls="mobileApplicationSolution1-2">Android App</a>
                                             <div id="mobileApplicationSolution1-2"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/android-application-development-services">Ionic
                                                      App </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/iphone-app-development-services"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#mobileApplicationSolution1-3"
                                                aria-expanded="false"
                                                aria-controls="mobileApplicationSolution1-3">IPhone App</a>
                                             <div id="mobileApplicationSolution1-3"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/iphone-app-development-services">IPhone
                                                      App</a>
                                                   </li>
                                                   <li><a
                                                      href="/iphone-ipad-application-development-services">IPhone
                                                      Ipad App</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwelve12-2" aria-expanded="false"
                                    aria-controls="collapseTwelve12-2">
                                    <strong>Emerging Technologies</strong>
                                 </button>
                              </h2>
                              <div id="collapseTwelve12-2" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#emerginTech1-1" aria-expanded="false"
                                                aria-controls="emerginTech1-1">Ecommerce & CMS Development</a>
                                             <div id="emerginTech1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/ai-chatbot-development">AI
                                                      Chatbot Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/ar-vr-app-development-company">AR/VR
                                                      Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/aws-development-services">AWS
                                                      Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/blockchain-development-services">BlockChain
                                                      Development </a>
                                                   </li>
                                                   <li><a
                                                      href="/iot-development-services">IOT
                                                      Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/iwatch-application-development-services">IWatch
                                                      App Development</a>
                                                   </li>
                                                   <li><a
                                                      href="/wearable-app-development-services">Wearable
                                                      App Development </a>
                                                   </li>
                                                   <li><a
                                                      href="/machine-learning-services-and-consultation">Machine
                                                      Learning </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThirteen13-3" aria-expanded="false"
                                    aria-controls="collapseThirteen13-3">
                                    <strong>UI/UX Design</strong>
                                 </button>
                              </h2>
                              <div id="collapseThirteen13-3" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="/software-development"
                                                className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#frontEndD1-1"
                                                aria-expanded="false" aria-controls="frontEndD1-1">Frontend
                                                Designing</a>
                                             <div id="frontEndD1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/software-development">Frontend
                                                      Designing</a>
                                                   </li>
                                                   <li><a href="/web-development">Responsive
                                                      Web Designing</a>
                                                   </li>
                                                   <li><a
                                                      href="/graphic-design-services">Graphic
                                                      Design</a>
                                                   </li>
                                                   <li><a
                                                      href="/corporate-branding">Corporate
                                                      Branding</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFouteen14-4" aria-expanded="false"
                                    aria-controls="collapseFouteen14-4">
                                    <strong>Web & Mobile Testing</strong>
                                 </button>
                              </h2>
                              <div id="collapseFouteen14-4" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <ul>
                                       <li>
                                          <div className="accordion__item__megamenu">
                                             <a href="#!" className="accordion-button collapsed"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#webMobileTesting1-1" aria-expanded="false"
                                                aria-controls="webMobileTesting1-1">Testing Services </a>
                                             <div id="webMobileTesting1-1" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <ul>
                                                   <li><a
                                                      href="/automation-testing-services">Automation
                                                      Testing</a>
                                                   </li>
                                                   <li><a
                                                      href="/manual-testing-services">Manual
                                                      Testing</a>
                                                   </li>
                                                   <li><a
                                                      href="/ecommerce-testing-services">Ecommerce
                                                      Testing</a>
                                                   </li>
                                                   <li><a
                                                      href="/selenium-testing-services">Selenium
                                                      Testing</a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="nav-aiservice" role="tabpanel" aria-labelledby="nav-aiservice-tab" tabIndex="0">
                        <div className="accordion" id="accordionNavAI">
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseAI1" aria-expanded="false" aria-controls="collapseAI1">
                                    <strong>Custom AI Development</strong>
                                 </button>
                              </h2>
                              <div id="collapseAI1" className="accordion-collapse collapse" data-bs-parent="#accordionNavAI">
                                 <div className="accordion-body">
                                    <ul>
                                       <li><a href="/custom-ai-development">Custom AI Development</a></li>
                                       <li><a href="/ai-application-development">AI Application Development</a></li>
                                       <li><a href="/generative-ai-solutions">Generative AI Solutions </a></li>
                                       <li><a href="/ai-application-development">Prompt Engineering Services</a></li>
                                       <li><a href="/ai-api-integration">AI API Integration</a></li>
                                       <li><a href="/ai-chatbot-development">AI Chatbot Development</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseAI2" aria-expanded="false" aria-controls="collapseAI2">
                                    <strong>Conversational AI Solutions</strong>
                                 </button>
                              </h2>
                              <div id="collapseAI2" className="accordion-collapse collapse" data-bs-parent="#accordionNavAI">
                                 <div className="accordion-body">
                                    <ul>
                                       <li><a href="/conversational-ai-solutions">Conversational AI Solutions</a></li>
                                       <li><a href="/customer-support-ai-chatbots">Customer Support AI Chatbots</a></li>
                                       <li><a href="/voice-bots-ai-ivr">Voice Bots & AI IVR</a></li>
                                       <li><a href="/whatsapp-web-app-chatbots">WhatsApp / Web / App Chatbots </a></li>
                                       <li><a href="/ai-helpdesk-automation">AI Helpdesk Automation</a></li>
                                       <li><a href="/multilingual-nlp-chatbots">Multilingual NLP Chatbots</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseAI3" aria-expanded="false" aria-controls="collapseAI3">
                                    <strong>AI For Ecommerce</strong>
                                 </button>
                              </h2>
                              <div id="collapseAI3" className="accordion-collapse collapse" data-bs-parent="#accordionNavAI">
                                 <div className="accordion-body">
                                    <ul>
                                       <li><a href="/ai-for-ecommerce">AI For Ecommerce</a></li>
                                       <li><a href="/ai-product-recommendations">AI Product Recommendations</a></li>
                                       <li><a href="/ai-powered-catalog-optimization">AI-Powered Catalog Optimization</a></li>
                                       <li><a href="/ai-sales-forecasting">AI Sales Forecasting</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseAI4" aria-expanded="false" aria-controls="collapseAI4">
                                    <strong>AI Powered Digital Marketing</strong>
                                 </button>
                              </h2>
                              <div id="collapseAI4" className="accordion-collapse collapse" data-bs-parent="#accordionNavAI">
                                 <div className="accordion-body">
                                    <ul>
                                       <li><a href="/ai-powered-digital-marketing">AI-Powered Digital Marketing</a></li>
                                       <li><a href="/ai-content-generation">AI Content Generation</a></li>
                                       <li><a href="/ai-seo-automation">AI SEO Automation</a></li>
                                       <li><a href="/ai-ad-campaign-optimization">AI Ad Campaign Optimization</a></li>
                                       <li><a href="/marketing-automation-with-ai">Marketing Automation with AI</a></li>
                                       <li><a href="/ai-support-managed-services">AI Support & Managed Services</a></li>
                                       <li><a href="/chat-support-services">Chat Support Services For AI Products</a></li>
                                       <li><a href="/voice-support-for-ai-products">Voice Support For AI Products</a></li>
                                       <li><a href="/customer-onboarding-services">Customer Onboarding Services</a></li>
                                       <li><a href="/project-implementation-services">Project Implementation Services</a></li>
                                       <li><a href="/virtual-assistant-services">Virtual Assistant Services</a></li>
                                       <li><a href="/ai-helpdesk-automation">AI Helpdesk Automation</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseAI5" aria-expanded="false" aria-controls="collapseAI5">
                                    <strong>Data & AI Automation</strong>
                                 </button>
                              </h2>
                              <div id="collapseAI5" className="accordion-collapse collapse" data-bs-parent="#accordionNavAI">
                                 <div className="accordion-body">
                                    <ul>
                                       <li><a href="/data-ai-automation">Data & AI Automation</a></li>
                                       <li><a href="/process-automation-consulting">Process Automation Consulting</a></li>
                                       <li><a href="/ai-data-entry-automation">AI Data Entry Automation</a></li>
                                       <li><a href="/workflow-automation">Workflow Automation</a></li>
                                       <li><a href="/ai-data-annotation">AI Data Annotation</a></li>
                                       <li><a href="/data-cleansing-for-ai">Data Cleansing For AI</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseAI6" aria-expanded="false" aria-controls="collapseAI6">
                                    <strong>AI Support & Managed Services</strong>
                                 </button>
                              </h2>
                              <div id="collapseAI6" className="accordion-collapse collapse" data-bs-parent="#accordionNavAI">
                                 <div className="accordion-body">
                                    <ul>
                                       <li><a href="/ai-support-managed-services">AI Support & Managed Services</a></li>
                                       <li><a href="/ai-operations-aiops">AI Operations (AIOps)</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <hr />
                  <form className="d-flex mt-2" role="search">
                     <a href="/contact-us" className="button-red" type="submit">GET A
                        PROPOSAL</a>
                  </form>
                  <div className="row align-items-center mt-3 sidebar-contact-details-container">
                     <div className="col-md-12 col-sm-6 py-2 d-flex align-items-center indian-data-text">
                        <img className="lozad flag-icon"
                           src="/images/bharat-flag-icon.svg"
                           alt="India" />
                        <div className="ms-3">
                           <a href="tel:+91-9871102889">+91-9871102889 (HR)</a>
                        </div>
                     </div>
                     <div className="col-md-12 col-sm-6 py-2 d-flex align-items-center indian-data-text">
                        <img className="lozad flag-icon"
                           src="/images/bharat-flag-icon.svg"
                           alt="India" />
                        <div className="ms-3">
                           <a href="tel:+91-9899675039">+91-9899675039 (Sales)</a>
                        </div>
                     </div>
                     <div className="col-md-12 col-sm-6 py-2 d-flex align-items-center">
                        <img className="lozad flag-icon"
                           src="/images/canada-flag-icon.svg"
                           alt="Canada" />
                        <div className="ms-3">
                           <a href="tel:1-778-382-9628">+1-778-382-9628 (Sales)</a>
                        </div>
                     </div>
                     <div className="col-md-12 col-sm-6 py-2 d-flex align-items-center">
                        <img className="lozad flag-icon"
                           src="/images/united-state-flag-icon.svg"
                           alt="United States of America" />
                        <div className="ms-3">
                           <a href="tel:1-516-858-4836">+1-516-858-4836 (Sales)</a>
                        </div>
                     </div>
                     <div className="col-md-12 col-sm-6 py-2 d-flex align-items-center mb-3">
                        <img className="lozad flag-icon"
                           src="/images/united-state-flag-icon.svg"
                           alt="United States of America" />
                        <div className="ms-3">
                           <a href="tel:1-516-858-5840">+1-516-858-5840 (Sales)</a>
                        </div>
                     </div>
                     <hr />
                     <div className="col-md-12 col-sm-6 py-2 d-flex align-items-center">
                        <i className="fa-solid fa-envelope text-danger fs-3"></i>
                        <div className="ms-3">
                           <a href="mailto:info@tech2globe.com">Info@tech2globe.com</a>
                        </div>
                     </div>
                  </div>
                  <div className="newsletter__container__mobile">
                     <div className="row d-flex align-items-center justify-content-center mt-2">
                        <div className="col-12">
                           <p className="mb-0">Get a Free Audit & Proposal</p>
                        </div>
                     </div>
                     <div className="row d-flex align-items-center justify-content-center mt-2">
                        <form id="subscriber_form">
                           <div className="col-8 pe-2">
                              <div className="email__input__mob">
                                 <input type="email" name="subscriber_mail" id="subscriber_mail"
                                    placeholder="Enter Email" className="w-100" required />
                              </div>
                           </div>
                           <div className="col-4 ps-0">
                              <div className="subscribe__btn__mob">
                                 <button type="submit" className="btn__subscribe__mob">SUBSCRIBE</button>
                              </div>
                           </div>
                        </form>
                        <div className="col-12">
                           <p>Subscribe to our Newsletter today</p>
                        </div>
                     </div>
                  </div>
                  <div className="row brands__logs__container d-flex justify-content-center">
                     <div className="col-6">
                        <div className="rating__content__container">
                           <div className="img__container">
                              <img src="/images/stats-clutch.png" alt="Tech2Globe Clutch Reviews" className="w-100" />
                           </div>
                           <div className="star__container">
                              <div className="sub__star__container sub__star__container1">
                                 <span className="review__num">5.0</span>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                              </div>
                              <div className="review__counter">
                                 <p>45+ Reviews</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="rating__content__container">
                           <div className="img__container">
                              <img src="/images/stats-google.png" alt="Tech2Globe Google Reviews" className="w-100" />
                           </div>
                           <div className="star__container">
                              <div className="sub__star__container sub__star__container2">
                                 <span className="review__num">4.0</span>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-regular fa-star"></i>
                              </div>
                              <div className="review__counter">
                                 <p>395+ Reviews</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="rating__content__container">
                           <div className="img__container">
                              <img src="/images/stats-trustpilot.png" alt="Tech2Globe Trustpilot Reviews" className="w-100" />
                           </div>
                           <div className="star__container">
                              <div className="sub__star__container sub__star__container3">
                                 <span className="review__num">4.2</span>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-regular fa-star"></i>
                              </div>
                              <div className="review__counter">
                                 <p>5+ Reviews</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="rating__content__container">
                           <div className="img__container">
                              <img src="/images/stats-designrush.png" alt="Tech2Globe Design Rush Reviews" className="w-100" />
                           </div>
                           <div className="star__container">
                              <div className="sub__star__container sub__star__container4">
                                 <span className="review__num">4.9</span>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-regular fa-star"></i>
                              </div>
                              <div className="review__counter">
                                 <p>20+ Reviews</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="rating__content__container">
                           <div className="img__container">
                              <img src="/images/stats-goodfirm.png" alt="Tech2Globe Good Firm Reviews" className="w-100" />
                           </div>
                           <div className="star__container">
                              <div className="sub__star__container sub__star__container5">
                                 <span className="review__num">5.0</span>
                                 <i className="fa-solid fa-star"></i>
                                 <FaStarHalf />
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-regular fa-star"></i>
                              </div>
                              <div className="review__counter">
                                 <p>30+ Reviews</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </header>
      </>
   )
}