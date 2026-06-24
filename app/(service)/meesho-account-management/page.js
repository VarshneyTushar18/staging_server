import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaHeadset, FaBullseye, FaUserTie, FaHandPointRight } from "react-icons/fa";
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
    title: "Meesho Account Management",
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
        text: "Meesho's reach into India's Tier 2 and Tier 3 markets is unparalleled, and Tech2Globe helped us unlock that potential for our traditional handicraft products. Their product listing strategy highlighted the authentic value of our goods effectively, and their pricing guidance helped us position competitively in Meesho's value-conscious marketplace. Within four months, our products were being resold through thousands of Meesho resellers across India. The growth has been phenomenal.",
        name: "Pradeep Kumar | Eastern Handicrafts Exports",
        location: "Bangladesh",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Selling authentic African textiles to Indian consumers through Meesho was an unconventional strategy, but Tech2Globe helped us execute it brilliantly. Their catalogue management made our products compelling and accessible, and their understanding of Meesho's reseller dynamics helped our items gain organic traction quickly. Order management and return handling were handled efficiently, and our seller rating has consistently stayed above 4.9. Tech2Globe genuinely understands this platform.",
        name: "Rose Mwangi | Nairobi Textile Collective",
        location: "Kenya",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Meesho's social commerce model was unlike anything we'd encountered in European e-commerce. Tech2Globe demystified it completely. Their team optimised our product catalogues for Meesho's unique discovery algorithm, managed our pricing strategy competitively, and helped us build a strong reseller network. The volume of orders we now receive through Meesho exceeds what we generate on many larger platforms. Tech2Globe's expertise in this space is extraordinary.",
        name: "Marcus Schmidt | Rhine Valley Hosiery",
        location: "Germany",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's Meesho account management services gave our African fashion brand its first real foothold in the Indian market. Their team was patient, thorough, and deeply knowledgeable about Meesho's evolving platform policies. They ensured our catalogue met all quality guidelines, managed our promotional offers strategically, and handled customer return disputes professionally. Month-on-month, our sales on Meesho have grown consistently. We're truly grateful for their partnership.",
        name: "Aisha Kamara | Lagos Lifestyle Brands",
        location: "Nigeria",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We supply everyday consumer goods and saw a massive opportunity in Meesho's fast-growing user base. Tech2Globe's management of our seller account was exceptional — from product upload and optimisation to return management and performance analytics. Their pricing strategy helped us remain the most competitive option in our categories, and their regular data-driven reviews kept our strategy sharp. Meesho now generates over 40% of our total India e-commerce revenue.",
        name: "Mei-Ling Zhao | Hangzhou Lifestyle Products",
        location: "China",
    },
]


const portfolioClients = [
    {
        initials: "EH",
        gradient: "#0b2e58",
        client: "Eastern Handicrafts Exports",
        country: "BD",
        project: "Meesho Social Commerce Expansion",
        desc: "Bangladeshi handicrafts brand leveraging Meesho to reach India's Tier 2 and Tier 3 consumers through reseller networks.",
        category: "Social Commerce",
        result: "Thousands of Resellers",
        resultSub: "Across India",
    },
    {
        initials: "NT",
        gradient: "#0b2e58",
        client: "Nairobi Textile Collective",
        country: "KE",
        project: "Cross-Border Fashion Growth",
        desc: "Kenyan textile brand introducing authentic African fabrics to Indian consumers through Meesho.",
        category: "Market Expansion",
        result: "4.9-Star Rating",
        resultSub: "Consistently Maintained",
    },
    {
        initials: "RV",
        gradient: "#0b2e58",
        client: "Rhine Valley Hosiery",
        country: "Germany",
        project: "Meesho Marketplace Growth",
        desc: "German hosiery manufacturer entering the Indian market through Meesho's reseller ecosystem.",
        category: "Marketplace Management",
        result: "Higher Order Volume",
        resultSub: "Than Major Platforms",
    },
    {
        initials: "LL",
        gradient: "#0b2e58",
        client: "Lagos Lifestyle Brands",
        country: "Nigeria",
        project: "Indian Market Entry",
        desc: "Nigerian fashion and lifestyle brand establishing its first presence in India via Meesho.",
        category: "Market Entry",
        result: "Consistent Sales Growth",
        resultSub: "Month-on-Month",
    },
    {
        initials: "HL",
        gradient: "#0b2e58",
        client: "Hangzhou Lifestyle Products",
        country: "China",
        project: "Consumer Goods Expansion",
        desc: "Chinese consumer goods manufacturer growing market share through Meesho's value-focused platform.",
        category: "Revenue Growth",
        result: "40%+ Revenue Share",
        resultSub: "From Meesho",
    },
];

export default function MeeshoAccountManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Meesho Account Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Meesho Account Management" imageSrc={"/images/services/service-inner/ecommerce-banner-1.jpg"} />
                            <div className={Style.ContentDiv}>

                                <p>Making money while working remotely is now easier than before. Meesho is the top eCommerce marketplace in India, supported by over 1 crore distributors all over India. The platform has helped women all over India become self-sufficient with their businesses.</p>

                                <p>You can also join the platform and begin your business career on Meesho right away.</p>

                                <p>You only need to contact the Tech2Globe team to set up your business remotely. Simply provide us with your account information, and we will start working on your account.</p>

                                <h2 className="mb-3">What Do You Need To Do To Start Your Home-Based Meesho Business?</h2>

                                <p>Register and create an account as a seller on Meesho to launch your home-based business. After that, you just need to look through the various product lines, and you will have a solid idea of which product categories, you want to sell</p>

                                <p>Look over these items and choose the ones that interest you.</p>

                                <p>Start sharing these catalogs, and once you start receiving feedback then you can start working on it.</p>

                                <h2 className="mb-3">You Can Find The Biggest Collection Of Affordable Products In Almost Every Category</h2>
                                <p>Meesho features various products in different categories, including clothing, skincare, and interior accessories. There are over 200 product categories from different companies to pick from. In addition, while doing order placement, you can find reviews and consumer feedback.</p>

                                <p>Sarees, Kurtis, jewelry, and collectibles are some of the most popular market segments.</p>

                                <p>Meesho also does frequent quality inspections to ensure that your consumers receive the highest-quality items.</p>

                                <h2 className="mb-3">With Meesho Reselling Products On WhatsApp Can Be Very Convenient</h2>

                                <p><strong>Step 1.</strong> Select the catalogs or goods you wish to share and select the 'Whatsapp Share' option. After that, choose the contacts you want to share the products with and send them to them.</p>

                                <p><strong>Step 2.</strong> When you distribute the catalog, you don't include Meesho's name or the product price.</p>

                                <p><strong>Step 3.</strong> You can share products directly from the app or website to your Facebook page or wall. Start selling to your consumers by simply putting all the relevant and informative product descriptions.</p>



                                <h2 className="mb-3">On Meesho, You May Earn Huge Profits With Home-Based Business With the Least spending.</h2>
                                <p>With home based business sellers will not only receive maximum outreach with Meesho but can also enhance profit margins in a hassle-free and straightforward manner. There is no better platform to start your business than Meesho as it offers simple payments, and the quick dispatch of goods.</p>


                                <h2 className="mb-3">What Is Meant By Meesho Reselling Platform?</h2>
                                <p>Meesho reselling is about purchasing goods from a wholesaler and reselling them to clients after adding a profit margin. Offline reselling has been around for quite some time. However, like many other forms of business, reselling can now be done quickly and easily online.</p>

                                <p>Yes, you may immediately start earning money online without making any investments and from the comfort of your own home.</p>

                                <p>You no longer need your store or inventory to be a successful seller. So, if you have a basic understanding of business and want to establish your own company, starting as a Meesho seller can be an ideal base to start with.</p>

                                <h2 className="mb-3">How Can You Become A Meesho seller?</h2>
                                <p>With just a phone and internet access, you can set up a business from anywhere. Whether you're a working woman or a housewife, Meesho makes it possible to create money online, all without leaving your place.</p>

                                <p>Set up your account with the help of Tech2Globe experts, and we will monitor your Meesho account and provide results that you have never experienced.</p>


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