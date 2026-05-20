import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "eCommerce Marketplace Management | Amazon, Flipkart & eBay Experts",
  description:
    "eCommerce Marketplace Management services for Amazon, Flipkart, eBay & more. Tech2Globe helps sellers with cataloging, listing, SEO & global growth.",
  keywords: [
    "Bulk Upload Products",
    "Bulk Upload Products to Amazon",
    "Amazon Product Uploading Services",
    "Amazon Product Uploading",
    "Product Uploading Services",
    "Product Uploading"
  ],
  openGraph: {
    title: "eCommerce Marketplace Management | Amazon, Flipkart & eBay Experts",
    siteName: "Tech2Globe Web Solutions LLP",
    description:
      "eCommerce Marketplace Management services for Amazon, Flipkart, eBay & more. Tech2Globe helps sellers with cataloging, listing, SEO & global growth.",
    url: "https://www.tech2globe.com/ecommerce-marketplace-management"
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Marketplace Management | Amazon, Flipkart & eBay Experts",
    description:
      "eCommerce Marketplace Management services for Amazon, Flipkart, eBay & more. Tech2Globe helps sellers with cataloging, listing, SEO & global growth."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/ecommerce-marketplace-management"
  }
};

const pageHeaderData = {
    title: "eCommerce Marketplace Management",
    description:
        "",
    buttonText: "Contact us",
    buttonLink: "#",
    backgroundImage: "/images/services/skyscraper.jpg",
    overlay: true
};

const usefulLinks = [
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
    { heading: "Useful Links", links: usefulLinks },
];


const faqs = [
    {
        id: "One",
        question: "What is eCommerce Marketplace Management?",
        answer: `
      eCommerce Marketplace Management is the process of handling product cataloging, listings, 
      SEO, advertising, and account operations on platforms like Amazon, Flipkart, eBay, and 
      Rakuten. It ensures your products rank higher, reach more buyers, and generate consistent 
      sales across multiple marketplaces.
    `,
    },
    {
        id: "Two",
        question: "Why do sellers need marketplace management services?",
        answer: `
      Sellers need marketplace management services to save time, avoid errors, and maximize sales. 
      Experts manage product listings, optimize keywords, run PPC campaigns, and monitor 
      performance, helping businesses reduce costs, increase visibility, and scale faster across 
      different online marketplaces.
    `,
    },
    {
        id: "Three",
        question: "How does Amazon marketplace management help increase sales?",
        answer: `
      Amazon marketplace management improves sales by optimizing product listings with SEO, 
      running targeted PPC ads, and handling account performance. It ensures your products rank 
      better in Amazon search, attract the right buyers, and convert clicks into purchases with 
      enhanced product visibility.
    `,
    },
    {
        id: "Four",
        question: "Can marketplace management services help with global selling?",
        answer: `
      Yes. Marketplace management services help sellers expand globally by setting up accounts, 
      localizing content, and managing compliance on international platforms like Amazon.com, eBay 
      Global, Rakuten, and Newegg. This allows businesses to reach more customers worldwide and 
      grow cross-border sales.
    `,
    },
    {
        id: "Five",
        question: "What marketplaces does Tech2Globe support?",
        answer: `
      Tech2Globe provides eCommerce marketplace management for Amazon, Flipkart, eBay, 
      Snapdeal, ShopClues, Paytm, Sears, Newegg, and Rakuten. Our team handles product 
      cataloging, listings, SEO, and advertising, helping businesses increase visibility and sales 
      across multiple online platforms.
    `,
    },
];


export default function EcommerceMarketplaceManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Ecommerce Marketplace Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="ecommerce Marketplace Management" imageSrc={"/images/services/service-inner/ecommerce-banner-1.jpg"} />
                            <div className={Style.ContentDiv}>
                                <p>Expand your business across Amazon, Flipkart, eBay, Snapdeal, ShopClues, Paytm, and more with Tech2Globe’s <b>end-to-end marketplace management solutions</b>. From <b>product cataloging and photo editing to listing optimization, account setup, and advertising,</b> our marketplace experts ensure your products stand out and sell more.</p>
                                <h2 className="text-danger mb-3">Services That Helps Your Business to Grow</h2>
                                <hr />
                                <ul className="inner-list ps-0 pb-2 d-flex flex-wrap list-unstyled">
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-icons-png.flaticon.com/512/5351/5351568.png" width={"10%"} className="me-2" /> Amazon Consulting Services</strong>
                                        <p className="pe-2"> Our experts help to setup account management, listing, optimization and bilingual services with different strategies to market your product and enhance sales.</p>
                                    </li>
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-icons-png.flaticon.com/512/49/49004.png" alt width={"10%"} className="me-2" /> Flipkart</strong>
                                        <p className="pe-2">Tech2Globe helps you to selling products online on Flipkart marketplace. We have a certified of Flipkart to complete your all Flipkart needs.</p>
                                    </li>
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-icons-png.flaticon.com/512/2166/2166832.png" alt width={"10%"} className="me-2" /> Amazon India</strong>
                                        <p className="pe-2">Expand your business activity from offline to online shops. With the help of Amazon India, you can target more customers and increase your sales and brand visibility.</p>
                                    </li>
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-icons-png.flaticon.com/512/2304/2304958.png" alt width={"10%"} className="me-2" /> EBay India</strong>
                                        <p className="pe-2">Tech2Globe has well experienced and certified ecommerce marketplace to fulfill your all EBay marketplace requirements.</p>
                                    </li>
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-icons-png.flaticon.com/512/709/709510.png" alt width={"10%"} className="me-2" /> Snapdeal</strong>
                                        <p className="pe-2">Snapdeal is one of the largest ecommerce marketplace. We have a team of experts that help you to boost your sales and set-up your business on Snapdeal.</p>
                                    </li>
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-icons-png.flaticon.com/512/2662/2662503.png" alt width={"10%"} className="me-2" /> Shopclues</strong>
                                        <p className="pe-2">Enhance your business and grow your brand’s visibility and sales as well with help of Shopclues marketplace.</p>
                                    </li>
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-user-icons.flaticon.com/113923/113923256/1706092849361.svg?token=exp=1706093761~hmac=2ee7240bc128245e176a62a523ec7164" alt width={"10%"} className="me-2" /> Paytm</strong>
                                        <p className="pe-2">Paytm is the latest entrance in the market with more than 10 crore customers, 60,000 sellers serving 500+ product categories.</p>
                                    </li>
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-icons-png.flaticon.com/512/7380/7380832.png" alt width={"10%"} className="me-2" /> Amazon Marketplace</strong>
                                        <p className="pe-2">Our professional helps you to setup your business on Amazon.Com from front to end services that helps to sell your products globally.</p>
                                    </li>
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-icons-png.flaticon.com/512/349/349312.png" alt width={"10%"} className="me-2" /> EBay Marketplace</strong>
                                        <p className="pe-2">We have specialized team with complete knowledge of EBay.Com management that helps your business more visible.</p>
                                    </li>
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" alt width={"10%"} className="me-2" /> Sears</strong>
                                        <p className="pe-2">Sears Marketplace can help your business to target millions of new customers and increase your online sales.</p>
                                    </li>
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-icons-png.flaticon.com/512/1952/1952998.png" alt width={"10%"} className="me-2" /> Newegg</strong>
                                        <p className="pe-2">Experienced Professionals for manage your business activity on Newegg by handling your daily activity.</p>
                                    </li>
                                    <li className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                                        <strong className="text-dark fw-bold py-1"><img src="https://cdn-icons-png.flaticon.com/512/3737/3737372.png" alt width={"10%"} className="me-2" /> Rakuten</strong>
                                        <p className="pe-2">Rakuten is one of the largest ecommerce platform in japan. Our Rakuten specialist helps to grow your business activity on Rakuten.</p>
                                    </li>
                                </ul>

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class={`${Style.serviceExpertise} my-5`}>
                <div class="container">
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h2 class="main-heading py-3">We Expertise in All <span>Major Services</span></h2>
                        <div class="row">
                            <ul class={Style.expertiseList}>
                                <li><a href="amazon-consulting-services" class="btn rounded-0"> Amazon Consulting Services</a></li>
                                <li><a href="online-business-management-flipkart" class="btn rounded-0"> Flipkart</a></li>
                                <li><a href="online-business-management-amazon-in" class="btn rounded-0"> Amazon India</a></li>
                                <li><a href="eBay-management" class="btn rounded-0"> eBay India</a></li>
                            </ul>

                            <ul class={Style.expertiseList}>
                                <li><a href="nop-commerce-development" class="btn rounded-0"> Nopcommerce Development</a></li>
                                <li><a href="volusion-development" class="btn rounded-0"> Volusion Development</a></li>
                                <li><a href="3dcart-development" class="btn rounded-0"> 3Dcart Development</a></li>
                                <li><a href="open-cart-development" class="btn rounded-0"> Open Cart Development</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <section className="our-customers-parent container text-center pb-5 d-flex justify-content-center align-items-center flex-column">
                <div className="row">
                    <h2 className="text pb-5 fw-1">Our <span className="text-danger">Customers</span></h2>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
                        <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-1.jpg" alt="Tulimed Logo" /></div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
                        <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-2.jpg" alt="Mid West Logo" /></div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
                        <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-3.jpg" alt="Magic Opener Logo" /></div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
                        <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-4.jpg" alt="hop water logo" /></div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
                        <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-5.jpg" alt="teliaoils logo" /></div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
                        <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-6.jpg" alt="Leaato Logo" /></div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
                        <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-7.jpg" alt="Greenyi Logo" /></div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
                        <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-8.jpg" alt="Tastee Treasures Logo" /></div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
                        <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-9.jpg" alt="Jucos Logo" /></div>
                    </div>
                </div>
            </section>
            <FaqSection faqs={faqs} />
        </>
    )
};