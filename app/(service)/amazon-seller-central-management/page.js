import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Link from "next/link";
import "./custom.css";

export const metadata = {
    title: "",
    description:
        "",
    keywords: [
        ""
    ],
    openGraph: {
        title: "",
        siteName: "",
        description:
            "",
        url: ""
    },
    twitter: {
        card: "",
        title: "",
        description:
            ""
    },
    alternates: {
        canonical: ""
    }
};

const pageHeaderData = {
    title: "Amazon Seller Central Management",
    backgroundImage: "/images/services/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Portfolio", path: "/portfolio" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
    {
        "id": 1,
        "name": "SEO On Page Services",
        "path": "/seo-services"
    },
    {
        "id": 2,
        "name": "E-Commerce SEO Services",
        "path": "/ecommerce-seo-services"
    },
    {
        "id": 3,
        "name": "Link building Services",
        "path": "/link-building-services"
    },
    {
        "id": 4,
        "name": "PPC Management Services",
        "path": "/ppc-management-services"
    },
    {
        "id": 5,
        "name": "Social media Marketing Services",
        "path": "/social-media-marketing-services"
    },
    {
        "id": 6,
        "name": "Email Marketing Services",
        "path": "/email-marketing-services"
    },
    {
        "id": 7,
        "name": "Online Reputation Management",
        "path": "/online-reputation-management-services"
    },
    {
        "id": 8,
        "name": "Content Marketing",
        "path": "/content-marketing"
    },
    {
        "id": 9,
        "name": "Guest Posting",
        "path": "/guest-posting-services"
    }
];

const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefulLinks },
];
const portfolio = [
    {
        title: "Product Uploading",
        items: [
            {
                title: "Lacanvas",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.lacanvas.com/",
                img: "/images/services/portfolio-img/lacanvas.jpg",
            },
            {
                title: "Linkcycle",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.linkcycle.com/",
                img: "/images/services/portfolio-img/linkcycle.jpg",
            },
            {
                title: "Silver Goldinto Cash",
                tech: "PHP, Mysql",
                link: "http://www.silvergoldintocash.com/",
                img: "/images/services/portfolio-img/silvergoldintocash.jpg",
            },
            {
                title: "Travel Blue",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.travel-blue.com/",
                img: "/images/services/portfolio-img/travel-blue.jpg",
            },
            {
                title: "Windsor One",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.windsorone.com/",
                img: "/images/services/portfolio-img/windsorone.jpg",
            },
            {
                title: "Zphotoedit",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.zphotoedit.com/",
                img: "/images/services/portfolio-img/zphotoedit.jpg",
            },
            {
                title: "Luiolei",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://www.luiolei.com/",
                img: "/images/services/portfolio-img/luiolei.jpg",
            },
            {
                title: "Plaza Surf Sports",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "http://www.plazasurfsports.com/",
                img: "/images/services/portfolio-img/plazasurfsports.jpg",
            },
            {
                title: "Shopaloo",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://shopaloo.com/",
                img: "/images/services/portfolio-img/shopaloo.jpg",
            },
            {
                title: "Sports456",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://www.sports456.com/",
                img: "/images/services/portfolio-img/sports456.jpg",
            }
        ],
    },
    {
        title: "Web Stores Design & Dev",
        items: [
            {
                title: "Consult for PPP",
                tech: "Asp.net, C#, SQL Server, Jquery.",
                link: "https://consultforppp.com/",
                img: "/images/services/portfolio-img/consultforppp.jpg",
            },
            {
                title: "Devouttechs",
                tech: "Asp.net, C#, SQL Server, Jquery.",
                link: "http://devouttechs.com/",
                img: "/images/services/portfolio-img/devouttechs.jpg",
            },
            {
                title: "Geturkart",
                tech: "Asp.net, C#, SQL Server, Jquery.",
                link: "https://geturkart.com/",
                img: "/images/services/portfolio-img/geturkart.jpg",
            },
            {
                title: "Nopextensions",
                tech: "Asp.net, C#, SQL Server, Jquery.",
                link: "http://nopextensions.com/",
                img: "/images/services/portfolio-img/nopextensions.jpg",
            },
            {
                title: "Shopaloo",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://shopaloo.com/",
                img: "/images/services/portfolio-img/shopaloo.jpg",
            },
            {
                title: "Sports456",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://www.sports456.com/",
                img: "/images/services/portfolio-img/sports456.jpg",
            },
            {
                title: "Luiolei",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://www.luiolei.com/",
                img: "/images/services/portfolio-img/luiolei.jpg",
            },
            {
                title: "Plaza Surf Sports",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "http://www.plazasurfsports.com/",
                img: "/images/services/portfolio-img/plazasurfsports.jpg",
            }
        ],
    },
    {
        title: "Indian Ecomm MarketPlace",
        items: [
            {
                title: "Windsor One",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.windsorone.com/",
                img: "/images/services/portfolio-img/windsorone.jpg",
            },
            {
                title: "Zphotoedit",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.zphotoedit.com/",
                img: "/images/services/portfolio-img/zphotoedit.jpg",
            },
            {
                title: "My Orthosoft",
                tech: "Cake PHP",
                link: "http://www.myorthosoft.com/",
                img: "/images/services/portfolio-img/myorthosoft.jpg",
            },
            {
                title: "Saleswarp",
                tech: "Cake PHP",
                link: "https://saleswarp.com/",
                img: "/images/services/portfolio-img/saleswarp.jpg",
            },
            {
                title: "Webmallng",
                tech: "PHP, Mysql, Jquery.",
                link: "https://www.webmallng.com/",
                img: "/images/services/portfolio-img/webmallng.jpg",
            },
            {
                title: "UnotechonLine",
                tech: "PHP, Mysql, Jquery.",
                link: "https://www.unotechonline.com/",
                img: "/images/services/portfolio-img/unotechonline.jpg",
            },
            {
                title: "Lacanvas",
                tech: "PHP, Mysql, Jquery.",
                link: "http://www.lacanvas.com/",
                img: "/images/services/portfolio-img/lacanvas.jpg",
            },
            {
                title: "Linkcycle",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.linkcycle.com/",
                img: "/images/services/portfolio-img/linkcycle.jpg",
            },
            {
                title: "Silver Goldinto Cash",
                tech: "PHP, Mysql",
                link: "http://www.silvergoldintocash.com/",
                img: "/images/services/portfolio-img/silvergoldintocash.jpg",
            },
            {
                title: "Travel Blue",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.travel-blue.com/",
                img: "/images/services/portfolio-img/travel-blue.jpg",
            },
        ],
    },
    {
        title: "International Ecomm Marketplace",
        subTabs: [
            {
                title: "Shopify",
                items: [
                    {
                        title: "Shop Modern Accessory",
                        tech: "Shopify",
                        link: "http://shopmodernaccessory.com/",
                        img: "/images/services/portfolio-img/shopmodernaccessory.jpg",
                    },
                    {
                        title: "Donna Bella Jewelry",
                        tech: "Shopify",
                        link: "http://www.donnabellajewelry.dk/",
                        img: "/images/services/portfolio-img/donnabellajewelry.jpg",
                    },
                    {
                        title: "E-Panneur",
                        tech: "Shopify",
                        link: "http://e-panneur.ca/",
                        img: "/images/services/portfolio-img/e-panneur.jpg",
                    },
                ],
            },
            {
                title: "Magento",
                items: [
                    {
                        title: "Sports456",
                        tech: "Magento",
                        link: "http://www.sports456.com/",
                        img: "/images/services/portfolio-img/sports456.jpg",
                    },
                    {
                        title: "All Extreme",
                        tech: "Magento",
                        link: "http://www.allextreme.in/",
                        img: "/images/services/portfolio-img/allextreme.jpg",
                    },
                    {
                        title: "Shoesuite",
                        tech: "Magento",
                        link: "https://www.shoesuite.ie/",
                        img: "/images/services/portfolio-img/shoesuite.jpg",
                    },
                    {
                        title: "Atkins",
                        tech: "Magento",
                        link: "https://www.atkins.ie/",
                        img: "/images/services/portfolio-img/atkins.jpg",
                    },
                    {
                        title: "Director Derblinds",
                        tech: "Magento",
                        link: "https://www.directorderblinds.co.uk/",
                        img: "/images/services/portfolio-img/directorderblinds.jpg",
                    },
                ],
            },
            {
                title: "BigCommerce",
                items: [
                    {
                        title: "Coovy Sports",
                        tech: "BigCommerce",
                        link: "https://coovysports.com/",
                        img: "/images/services/portfolio-img/coovysports.jpg",
                    },
                ],
            },
            {
                title: "NopCommerce",
                items: [
                    {
                        title: "Luiolei",
                        tech: "NopCommerce",
                        link: "http://www.luiolei.com/",
                        img: "/images/services/portfolio-img/luiolei.jpg",
                    },
                    {
                        title: "Plaza Surf Sports",
                        tech: "NopCommerce",
                        link: "http://www.plazasurfsports.com/",
                        img: "/images/services/portfolio-img/plazasurfsports.jpg",
                    },
                    {
                        title: "Home Turph",
                        tech: "NopCommerce",
                        link: "https://www.hometurph.com/",
                        img: "/images/services/portfolio-img/hometurph.jpg",
                    },
                ],
            },
        ],
    },
]

export default function AmazonSellerCentralManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon Seller Central Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="maincontent">

                                <ul className="nav nav-tabs amazon-marketplace-tabs" role="tablist">

                                    <li className="nav-item " role="presentation"><a className="nav-link active" data-bs-toggle="tab" href="#amazon1" aria-current="page" aria-selected="true" role="tab">AMAZON CONSULTANCY AND <br />ACCOUNT LAUNCH SERVICES</a></li>

                                    <li className="nav-item " role="presentation"><a className="nav-link" data-bs-toggle="tab" href="#amazon2" aria-selected="false" role="tab" tabindex="-1">AMAZON PRODUCT <br />MARKETING SERVICES</a></li>

                                    <li className="nav-item " role="presentation"><a className="nav-link" data-bs-toggle="tab" href="#amazon3" aria-selected="false" role="tab" tabindex="-1">AMAZON SALES <br />BOOST SERVICES</a></li>

                                    <li className="nav-item " role="presentation"><a className="nav-link" data-bs-toggle="tab" href="#amazon4" aria-selected="false" role="tab" tabindex="-1">AMAZON ACCOUNT MANAGEMENT <br />AND SUPPORT SERVICES</a></li>

                                </ul>



                                <div className="tab-content">

                                    <div id="amazon1" className="tab-pane active show" role="tabpanel">

                                        <div className="row  in">

                                            <div className="amazon-service-content-outer amazon-left col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Seller Onboarding Management / Amazon Fly Services</h3>

                                                    <p>Tech2Globe’s professionals can help you to setup and handle your seller account. Our eCommerce experts provide you complete support to create your seller account on Amazon Global Marketplace with your details and upload all the relevant documents that required to setup seller account. Along with, Tech2Globe’s eCommerce experts manage your all product listing, inventory, create authentic content, use tempting images and handle your Seller Account on the behalf of you, it includes to complete daily activity, improve the presentation of your product, keywords analysis &amp; make improvements according to the customer’s shopping pattern, maintain daily records of order, analysis customer’s shopping behavior and much more. We have complete team of professionals to generate the best results.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="amazon-service-img">

                                                    <img className="content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Seller-Onboarding-Management.jpg" alt="" />

                                                </div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Seller-Training.jpg" alt="" /></div>

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Seller Training</h3>

                                                    <p>Through Tech2Globe’s seller training program, our experts will guide you in each and every step to sell your products on Amazon Indian Marketplace &amp; Amazon Global Marketplaces as well like – Europe, German, France, Italy, UK, Spain, Japan, India. It includes to setup account management, manage inventory, use marketing tools, product’s images and much more. With the help of Tech2Globe’s Seller Training program you can get the more details about the Amazon Marketplace. Our experts will guide you in every step to create and setup your own seller account on Amazon Global Marketplace and Amazon Indian Marketplace too and start selling your products.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="clearfix"></div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-left col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Product Images Shoot &amp; Editing</h3>

                                                    <p>Appealing Product Images is the crucial part to attract customers and enhance sales. As per marketing trend, over 30% of consumers admit that an attractive images is one of the main reason to shop more. Here, at Tech2Globe has complete in-house materials to deliver the perfect results in the form of product images shoot by professional photographer and after, conduct an image editing process by our photo-editor’s team to convert simple images into attractive one as well as change background into white color, correct color &amp; sharpness, adjust lighting &amp; white balance, remove watermarks &amp; shadows and complete the whole editing process with advanced image editing tools like Adobe Photoshop and with according to the Amazon’s image upload guidelines.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Product-Images-Shoot.jpg" alt="" /></div>

                                                <div className="clearfix"></div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Product-Cataloguing.jpg" alt="" /></div>

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Product Cataloguing</h3>

                                                    <p>Cataloguing is the way to present all the product’s information in the well-systematic way. Tech2Globe’s team of eCommerce experts, catalog managers and back-office support experts to generate best outcome and handle your store on Amazon Global Marketplace. We have complete in-house resources to fulfill your all cataloguing needs from Simple Cataloguing to Advance Cataloguing that help your products to get more awareness and increase the conversion rate on Amazon Global Marketplace. It includes to create A+ Content for product description, use sharp product’s images, generate keywords to get the visibility on SERPs and provide all the crucial details like – shape, size, weight, etc. along with FAQs section to get the better sales conversion.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="clearfix"></div>

                                            </div>



                                        </div>

                                    </div>





                                    <div id="amazon2" className="tab-pane" role="tabpanel">

                                        <div className="row">

                                            <div className="amazon-service-content-outer amazon-left col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Marketing Services (AMS)</h3>

                                                    <p>Marketing is the need for every business which helps to enhance the visibility and generate more customer. Our Marketing professionals has experienced in Amazon Marketplace, guide you to run multiple marketing campaigns such as – headline search campaign, sponsored ads campaign and product display ads to increase the credibility of your business. At Tech2Globe provides effective Amazon Marketing Services in which you can increase your customer’s database and our professionals help you to stand out against your competitors on Amazon Global Marketplace. AMS is the opportunity to directly introduce your products to the customers and drive traffic directly to your product detail pages.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Marketing-Services.jpg" alt="" /></div>

                                                <div className="clearfix"></div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Sponsored-Ads.jpg" alt="" /></div>

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Sponsored Ads</h3>

                                                    <p>Our team provide you full resources to create or run sponsored ads campaign that drive your brand/business visibility on Amazon Global Marketplaces. Tech2Globe’s Sponsored Ads service is one of the effective way to increase your products visibility in product pages and on Amazon search by Keyword Targeted Ads. The main focus of our sponsored ads service to boost your traffic on product pages, increase buy box traffic whether you are a new seller or the old seller, we help you to achieve buy box for your products to run promotional activities in amazon account through sponsored ads, headline search, products display ads and many more as well as helps to increase your ROI. You can select products that you want to advertise on Amazon Global Marketplaces, we support you to set-up keywords related to the products with customer search terms and insert a cost-per-click bid. Effective Advance Amazon Sponsored Ads strategy helps to target more buyers and hike sales as well.</p>



                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="clearfix"></div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-left col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon A+ Cataloguing / Amazon Rich Content</h3>

                                                    <p>With the help of A+ or Rich Content service, your sales can boost up to 3% to 10%. Amazon Rich Content service is one of the main service of Tech2Globe which help you to better drive your business on Amazon Global Marketplace and increase the better engagement with customers. Through our Amazon A+ Cataloguing service, our experts will take-care and fulfill your all business needs in the form of creating interesting &amp; compelling A+ content and providing every information of products that help buyers to make purchase. Along with, high-resolution product’s images, better product description, comparison with charts &amp; videos and multiple templates helps to boost the conversion rates, improve the presentation of content and promote your business as well.</p>

                                                    <div className="amazon-btn text-light bg-danger rounded-0-list">

                                                        <a href="https://www.amazon.com/dp/B076TGSDYH#aplus3p_feature_div" className="btn" target="_blank">Sample 1</a>

                                                        <a href="https://www.amazon.com/dp/B078GXZBFF#dpx-aplus-3p-product-description_feature_div" className="btn" target="_blank">Sample 2</a>

                                                        <a href="https://www.amazon.com/dp/B07GT7XZ6C#dpx-aplus-3p-product-description_feature_div" className="btn" target="_blank">Sample 3</a>

                                                        <a href="https://www.amazon.com/dp/B01M3XPZCU#dpx-aplus-3p-product-description_feature_div" className="btn" target="_blank">Sample 4</a>

                                                    </div>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Cataloguing.jpg" alt="" /></div>

                                                <div className="clearfix"></div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Storefront-Creation.jpg" alt="" /></div>

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Storefront Creation/Setup</h3>

                                                    <p>Creating a Storefront on Amazon Global Marketplace is the important component to attract more customers. By using Tech2Globe’s Amazon Storefront Creation service help your brand or business to set-up a separate store on Amazon Global Marketplace platform to get the more visibility about your products and increase the ROI. With the help of separate Storefront only you can list your products on your store and protect your brand from the duplicators. Our team is capable to setup your own storefront with appealing store design, use trendy layout &amp; tempting images and create compelling content, add videos and other creative elements as well as follow Amazon’s guidelines to list products and deliver the accurate results with 99 percent of accuracy.</p>



                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="clearfix"></div>

                                            </div>

                                        </div>

                                    </div>





                                    <div id="amazon3" className="tab-pane" role="tabpanel">

                                        <div className="row">

                                            <div className="amazon-service-content-outer amazon-left col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Advertising Optimization</h3>

                                                    <p>By Tech2Globe’s Amazon Advertising Optimization services provide full support to run sponsored ad campaigns which help your business to get more exposure and increase sales as well. We have full management of Amazon Advertising to optimize your campaigns based on your target sales, cost and ACoS. Along with, our team of professionals send you a full report of your overall sales each week as well as a report of each ASIN so you can see how each individual product is doing and be able to compare conversion rates week over week. Then, in every schedule time we conduct our own internal audit so we can measure your whole campaign’s growth and to ensure which keyword is performing well so, we can pause any keywords that haven’t been performing well enough from your Search Term Report.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/amazon-advertising-optimization.jpg" alt="" /></div>

                                                <div className="clearfix"></div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Headline-Search.jpg" alt="" /></div>

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Headline Search</h3>

                                                    <p>Headline Search is the effective advertising campaign to spread the awareness of your business and many business still using it to get the high conversion. With the benefit of keywords targeted, your headline search ads will be displayed at the top of customer search result page, no matter customer use mobile or computer. Tech2Globe’s Amazon Ecommerce experts support you to create your headline search ads with customize headline, your logo, product image, ASIN selection and with custom landing page selection as well as our experts help you to get the approval of your brand on Amazon in the form of Brand Registry. Without getting the Brand Registry approval from Amazon, you’re not able to run headline search ads. So, Tech2Globe register your brand on Amazon Global Marketplace with some of your documents.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="clearfix"></div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-left col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Product Display Ads</h3>

                                                    <p>You can increase your customers as well as product visibility on Amazon Global Marketplace by using products targeted ads and drive traffic to the detail product page. Tech2Globe’s professionals support you to stand out against your competitors and boost sales. Our team of eCommerce experts will maintain an eye on your ads campaign and make any necessary changes that receive a lot of impression, if required. Along with, create analytics report of your ads campaign that help to improve the way of increasing customers and enhance the sales conversion.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Product-Display-Ads.jpg" alt="" /></div>

                                                <div className="clearfix"></div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Enhanced-Brand-Content.jpg" alt="" /></div>

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Enhanced Brand Content</h3>

                                                    <p>Our Enhance Brand Content (EBC) service helps to get the more exposure of your business/brand. We have complete resources to fulfill your EBC needs, it includes to create rich content by professional content writers, use engaging product’s images which is edited by our photo-editor’s team in correct dimensions and pixels quality, upgrade product’s description according to the SEO prospective, insert each and every details of products and improve text placement. Tech2Globe supports you in every step by our EBC service to make your listing more eye-catching and provide the accurate &amp; exact information about your products to the buyers as results enhance the traffic on your product pages and increase the conversion rates as well. Tech2Globe’s team of professionals understand your business needs and deliver the unique final results in the attractive EBC templates that perfectly present your products in front of the buyers.</p>

                                                    <div className="amazon-btn text-light bg-danger rounded-0-list">

                                                        <a href="https://www.amazon.com/dp/B076TGSDYH#aplus3p_feature_div" className="btn" target="_blank">Sample 1</a>

                                                        <a href="https://www.amazon.com/dp/B078GXZBFF#dpx-aplus-3p-product-description_feature_div" className="btn" target="_blank">Sample 2</a>

                                                        <a href="https://www.amazon.com/dp/B07GT7XZ6C#dpx-aplus-3p-product-description_feature_div" className="btn" target="_blank">Sample 3</a>

                                                        <a href="https://www.amazon.com/dp/B01M3XPZCU#dpx-aplus-3p-product-description_feature_div" className="btn" target="_blank">Sample 4</a>

                                                    </div>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="clearfix"></div>

                                            </div>

                                        </div>

                                    </div>





                                    <div id="amazon4" className="tab-pane" role="tabpanel">

                                        <div className="row">

                                            <div className="amazon-service-content-outer amazon-left col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Seller Account Management</h3>

                                                    <p>Through seller account, anyone or 3P sellers can able to sell their products on Amazon Global Marketplace and target customers internationally. By using Tech2Globe’s amazon seller account management services, our professional can handle your seller account, it includes to manage product listing optimization, product image editing, order processing and follow Amazon’s Product Search Algorithm to increase the visibility of your brand on Amazon. As well as, provide you multiple Marketing Services like – Amazon Headline Search Ads, Amazon Sponsored Ads, Amazon Display Product Ads, etc. help to drive the better engagement of customer and increase the conversion rate.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Seller-Account-Management.jpg" alt="" /></div>

                                                <div className="clearfix"></div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Vendor-Account-Management.jpg" alt="" /></div>

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Vendor Account Management</h3>

                                                    <p>With the Tech2Globe’s Amazon Vendor Account Management services, any manufactures, distributers and vendors can sell their products directly on the Amazon Global Marketplace. Tech2Globe can help you to setup your vendor account and providing A+ content, high-quality editing images and do advance cataloging as well as use multiple marketing tools such as Amazon Sponsored Ads, Subscribe &amp; Save and much more. Our experts can help you to boost your revenue by providing inventory management, order entry, invoice processing, shipment tracking and return, create product listing optimization according to Amazon’s product search algorithm.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="clearfix"></div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-left col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Seller Account Reinstatement</h3>

                                                    <p>Tech2Globe’s Amazon Seller Account Reinstatement service help to re-instate or re-generate your suspended Amazon Seller Account on Amazon Global Marketplace which is suspended due to some reasons or not following guidelines by Amazon after given a valid reason for suspension in the Performance Notification Email. Our team of experts will guide you in each step to re-generate your suspended account. Our eCommerce experts appeal against the suspension on the behalf of you and follow 24 hours TAT for first Plan of Action (POI) submission along with mention an authentic reason to not follow guidelines and never happen again in future and after that we take follow ups with Amazon team till the time reinstatement.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Seller-Account-Reinstatement.jpg" alt="" /></div>

                                                <div className="clearfix"></div>

                                            </div>



                                            <div className="amazon-service-content-outer amazon-right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <div className="amazon-service-img"><img className="pr-20 content-imag aplus-img lazyloaded w-100 my-3" src="images/Amazon-Bilingual-Translation.jpg" alt="" /></div>

                                                <div className="amazon-service-content py-5">

                                                    <h3>Amazon Bilingual / Translation</h3>

                                                    <p>With the help of our Bilingual or Translation service, you can sell your products on Amazon Global Marketplace and target international customers in their native language. We have complete team of experienced and skilled translators for converting A+ pages, product’s details &amp; descriptions, pay per click ads, amazon listing, keywords, etc. in multiple languages. Our bilingual or translation service cover wide range of languages to convert rich content copies in German, French, Spanish, Italian, Chinese, Japanese and much more. By our error-free translation service, you are able to expand your business activity internationally and reach your customer’s growth across the globe in addition increase your business visibility. Tech2Globe’s team is committed to providing impressive translation service in the given time-period.</p>

                                                    <a href="/contact-us" className="btn amazon-btn text-light bg-danger rounded-0">Contact Our Amazon Expertise</a>

                                                </div>

                                                <div className="clearfix"></div>

                                            </div>

                                        </div>

                                    </div>





                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} title={'Our Portfolio'} description={''} />
            </div>


        </>
    )
};