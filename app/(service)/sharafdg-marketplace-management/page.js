import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import {
    FaUsers,
    FaBullhorn,
    FaMoneyBillWave,
    FaShieldAlt
} from "react-icons/fa";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";


export const metadata = {
    title: "",
    description:
        "",
    keywords: [
        ""
    ],
    openGraph: {
        title: "",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "",
        url: ""
    },
    twitter: {
        card: "summary_large_image",
        title: "",
        description:
            ""
    },
    alternates: {
        canonical: ""
    }
};

const pageHeaderData = {
    title: "SharafDG Marketplace Management",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
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

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "SharafDG is one of the most competitive electronics platforms in the GCC, and Tech2Globe helped us navigate it brilliantly. Their team understood the platform's vendor requirements, managed our catalogue of 800+ SKUs flawlessly, and implemented a pricing strategy that kept us competitive against major brands. Within three months, our product visibility on SharafDG improved significantly and monthly revenue grew by 52%. Their understanding of the regional market dynamics is outstanding.",
        name: "Ahmed Al-Rashidi | TechVision FZCO",
        location: "UAE",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Expanding into the UAE electronics market via SharafDG was a strategic priority for us. Tech2Globe made the vendor onboarding process smooth and helped us create compelling, regulation-compliant product listings. Their team monitored our performance metrics constantly and provided weekly optimisation recommendations. We achieved preferred vendor status on SharafDG within six months — a milestone we attribute entirely to Tech2Globe's expert management.",
        name: "Thomas Bergmann | ProTech Solutions GmbH",
        location: "Germany",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "As an Omani electronics distributor entering the UAE market via SharafDG, we needed a partner who understood both the platform and regional compliance requirements. Tech2Globe was exceptional. Their product cataloguing accuracy was impressive, their order management was seamless, and their customer service support kept our seller ratings consistently high. They are now our trusted partner for all our Gulf marketplace operations.",
        name: "Fatima Al-Zahrawi | Qamar Electronics Trading",
        location: "Oman",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe helped us launch our consumer electronics brand on SharafDG as part of our Middle East expansion strategy. The team's knowledge of Arabic content requirements, regional pricing norms, and SharafDG's vendor portal was genuinely impressive. Product listing approval timelines that typically take weeks were completed in days. Our market entry was flawless, and we've been growing at 20% month-on-month since launch.",
        name: "Sarah Whitfield | BritTech Consumer Electronics",
        location: "United Kingdom",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "SharafDG was our entry point into the UAE's rapidly growing smart home technology market. Tech2Globe's management of our vendor account, promotional campaigns, and customer feedback systems allowed us to establish brand credibility quickly. Their data analytics reporting helped us identify our top-performing product categories and double down on them. Within a year, we became one of the top-ranked smart home brands on SharafDG. Tech2Globe's expertise made that possible.",
        name: "Yusuf Tanaka | Nippon Smart Devices",
        location: "Japan",
    },
]

const portfolioClients = [
    {
        initials: "TV",
        gradient: "#0b2e58",
        client: "TechVision FZCO",
        country: "UAE",
        project: "SharafDG Electronics Growth",
        desc: "UAE-based consumer electronics distributor seeking to strengthen performance and visibility on SharafDG.",
        category: "Marketplace Growth",
        result: "52% Revenue Growth",
        resultSub: "In 3 Months",
    },
    {
        initials: "PS",
        gradient: "#0b2e58",
        client: "ProTech Solutions GmbH",
        country: "Germany",
        project: "UAE Market Entry",
        desc: "German technology hardware brand expanding into the UAE market through SharafDG.",
        category: "Vendor Onboarding",
        result: "Preferred Vendor Status",
        resultSub: "Within 6 Months",
    },
    {
        initials: "QE",
        gradient: "#0b2e58",
        client: "Qamar Electronics Trading",
        country: "OM",
        project: "Cross-Border Marketplace Expansion",
        desc: "Omani electronics distributor expanding operations into the UAE through SharafDG.",
        category: "Marketplace Management",
        result: "4.9-Star Seller Rating",
        resultSub: "Maintained Consistently",
    },
    {
        initials: "BC",
        gradient: "#0b2e58",
        client: "BritTech Consumer Electronics",
        country: "United Kingdom",
        project: "Middle East Market Launch",
        desc: "UK smart home technology brand using SharafDG to accelerate Middle East market entry.",
        category: "Market Entry",
        result: "20% Monthly Growth",
        resultSub: "Post Launch",
    },
    {
        initials: "NS",
        gradient: "#0b2e58",
        client: "Nippon Smart Devices",
        country: "Japan",
        project: "Smart Home Category Expansion",
        desc: "Japanese smart home technology brand building a UAE market presence through SharafDG.",
        category: "Brand Growth",
        result: "Top-Ranked Brand",
        resultSub: "Within 12 Months",
    },
];


export default function SharafdgMarketplaceManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Sharafdg Marketplace Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Sharafdg Marketplace Management" imageSrc={"/images/services/service-inner/ecommerce-banner-1.jpg"} />
                            <div className={Style.ContentDiv}>

                                <h2 className="mb-3">Explore SharafDG Marketplace Management Solutions!</h2>

                                <p>Looking for a hassle-free way to sell your products? Our SharafDG Consulting Services will put your brand on the global marketplace map.</p>

                                <h2 className="mb-3">Get More Venues to Sell and Grow Online with SharafDG</h2>

                                <p>As an online seller, it’s not always easy to present your product in front of the right customer. Therefore, selling your products on a marketplace like Sharaf DG UAE can be a great way to expand your reach and increase your sales. With Sharaf DG, you'll have access to a massive audience of shoppers who are actively searching for the products you sell. Moreover, this user-friendly platform makes it easy to list and manage your products, track your sales performance, and communicate with customers.</p>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card p-3 mb-3">
                                            <div className="text-center">
                                                <FaUsers size={32} className="mb-3 " />
                                                <h5 className="fw-medium">Expand Customer Base</h5>
                                                <p className="mb-0">
                                                    Better opportunity to reach a larger audience and boost revenue
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card p-3 mb-3">
                                            <div className="text-center">
                                                <FaBullhorn size={32} className="mb-3 " />
                                                <h5 className="fw-medium">Brand Awareness</h5>
                                                <p className="mb-0">
                                                    With a new marketplace, boost the visibility of your business and products.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card p-3 mb-3">
                                            <div className="text-center">
                                                <FaMoneyBillWave size={32} className="mb-3 " />
                                                <h5 className="fw-medium">Economical</h5>
                                                <p className="mb-0">
                                                    We take care of your products' marketing and promotion. Spend less on advertising with us.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card p-3 mb-3">
                                            <div className="text-center">
                                                <FaShieldAlt size={32} className="mb-3 " />
                                                <h5 className="fw-medium">Secure Payment</h5>
                                                <p className="mb-0">
                                                    Our payment and delivery services make it simple for you to sell your goods.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <h2 className="mb-3">Form an Alliance with Tech2Globe to Ace the Marketplace Game</h2>
                                <p>At Tech2Globe, we specialise in helping businesses like yours thrive on the various global marketplaces. Managing your listings, orders, and customer service can be a time-consuming and challenging task. That's where we step in.</p>

                                <ul className="inner-list ps-0 pb-2">
                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Account Setup:
                                        </strong>
                                        <p className="mb-0">
                                            Your account will be set up completely by our team of professionals, who will guarantee a seamless integration with <strong>SharafDG Marketplace</strong>. We’ll take care of it all, so you may sit back and relax.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            SharafDG Product Listing:
                                        </strong>
                                        <p className="mb-0">
                                            Optimised <strong>SharafDG product upload</strong> and listing ensures that your products are accurately displayed on the platform. Our virtuosos use top-notch photos, personalised descriptions, and optimised keyword phrases to make you more noticeable.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Inventory Management:
                                        </strong>
                                        <p className="mb-0">
                                            Administering and monitoring your stock levels and making sure you always have enough product on hand to satiate orders. As a part of SharafDG account management, we do effective inventory management to enhance your sales potential and prevent stockouts.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Pricing Strategy:
                                        </strong>
                                        <p className="mb-0">
                                            We'll create a pricing strategy that maximises your earnings while maintaining market parity. To assist you stay ahead of the competition, our experts will keep a close eye on market developments to update your prices accordingly.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Marketing and Promotions:
                                        </strong>
                                        <p className="mb-0">
                                            Through targeted advertising campaigns, and other promotional initiatives, we'll help you contact more consumers on Sharaf DG UAE. Our team will collaborate with you to create a thorough marketing plan that is customised to your company and your target market.
                                        </p>
                                    </li>

                                    <li className="pb-0">
                                        <strong className="text-dark fw-bold">
                                            SharafDG Account Management:
                                        </strong>
                                        <p className="mb-0">
                                            With our all-inclusive account management, you may gain access to a big customer base through the <strong>Sharaf DG Dubai</strong>, UAE, and other middle-eastern countries, and enhance earnings by improving efficiencies.
                                        </p>
                                    </li>
                                </ul>

                                <p>We're committed to assisting you in succeeding in the global marketplaces with our SharafDG Marketplace Management Services. Whether you're a novice or seasoned seller, our team has the knowledge and tools to support you in achieving your objectives.</p>

                                <h2 className="mb-3">Why Can You Rely On Us?</h2>
                                <p>There is no better approach than through e-commerce to grow your business to new heights. The <strong>SharafDG Consulting Services</strong> from Tech2Globe can fuel your flight to reach new skies.</p>

                                <ul className="inner-list ps-0 pb-2">
                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Market Management Proficiency:
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe has years of experience in the marketplace managerial business. Our knowledgeable team can assist you in maximising sales by helping you navigate the complexities of the market.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Enhanced Visibility and Sales:
                                        </strong>
                                        <p className="mb-0">
                                            With our solutions, we can help you improve your visibility on SharafDG, which in turn, can increase your sales. We will optimise your SharafDG product data entry, listing, run targeted ads, and implement other strategies to drive traffic to your store and increase conversions.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Value of Time:
                                        </strong>
                                        <p className="mb-0">
                                            By working with Tech2Globe, you can concentrate on other aspects of your company while we handle marketplace administration. You can channel your focus on expanding your business because we'll take care of everything, from product listings to customer service.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Economical:
                                        </strong>
                                        <p className="mb-0">
                                            Hiring a specialised group to run your SharafDG marketplace store might be costly. Working with Tech2Globe, however, will give you access to a team of specialists at a far lower price.
                                        </p>
                                    </li>

                                    <li className="pb-0">
                                        <strong className="text-dark fw-bold">
                                            Personalised Solutions:
                                        </strong>
                                        <p className="mb-0">
                                            We offer personalised marketplace management services tailored to your specific needs. Tech2Globe works to understand your goals and develop a strategy that aligns with your business objectives.
                                        </p>
                                    </li>
                                </ul>

                                <p>Get in touch with us right away to find out more about our marketplace management services and to begin expanding your company on SharafDG!</p>

                            </div>


                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            {/* <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} />
            </div> */}

            <ClientPortfolio clients={portfolioClients} />

            <ClientSlider testimonials={testimonials} />
        </>
    )
};