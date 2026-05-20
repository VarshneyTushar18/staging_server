import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaHeadset, FaBullseye, FaUserTie, FaHandPointRight, FaArrowRight } from "react-icons/fa";

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
    title: "IT Staffing And Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const usefulLinks = [
    { id: 1, name: "Bulk Product Upload Services", path: "/bulk-product-upload-services" },
    { id: 2, name: "Chat Support Services", path: "/chat-support-services" },
    { id: 3, name: "Banking Data Entry Services", path: "/banking-data-entry-services" },
    { id: 4, name: "IT Staffing Services", path: "/it-staffing" },
];


const sidebarSections = [
    { heading: "Resources", links: usefulLinks },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
        name: "Roxel- Account Management India",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Excellent Team, good results in sales",
        name: "Andriana- Amazon Sponsored Ads USA",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Excellent service by Tech2globe, brilliant service and hardworking",
        name: "Neo Global- Vendor Account Management UK",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Courteous, professional, quality work, best bang for your buck",
        name: " Medi Hub- Amazon Store Creations USA",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
        name: "Teliamed- Amazon Enhance Brand Content USA",
    },
];



export default function ItStaffing() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="IT Staffing" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="IT Staffing" imageSrc={"/images/services/service-inner/mobileandwebd-banner-1.jpg"} />

                            <div className={Style.ContentDiv}>

                                <p>A common challenge faced by smaller businesses is how to attract the best talent in the market when competing with large firms. In this our organisation do help you in hiring the employee from our website as we do provide you the services of IT staffing as well.</p>

                                <p>Now forget about the challenges you face in finding, recruiting, training and retaining high-quality professional staff as Tech2Globe brings the solution to your all IT staffing problems. We help you deal with the business challenges by providing you the best quality staff. We are the best staffing firm that helps our clients with talent, skill and knowledge.</p>

                                <p>We are one of the leading <a href="software-development" className="text-decoration-underline">software developing company</a> that gives you the best IT staff to make your business flourish and grow to new heights. Tech2Globe is here to help you address your staffing needs and achieve your business goals with proficiency.Our TECH2GLOBE have a better sense of the candidate marketplace in your industry and geographic area and can effectively evaluate candidates' experience and skills. Getting a good match the first time saves your time and money.we can maximize the benefits of the temporary staff to your company and your team by setting up in advance. we are also Providing feedback about the new worker to your staffing agency representative helps both the recruiter and yourself with any future talent searches.The top candidates are hard to find, and those that are looking for work may find themselves weighing multiple job offers.</p>

                                <h4>Technology alone doesn’t support the growth, you also need best men power with technical knowledge about the field to give you competitive advantage over other companies.</h4>
                                <hr />
                                <p>Catalog building and recording and updating it is not just all. We will also provide you the service of catalog processing. This is a human nature that it gets attracted to things that appeals the sense, and that's what we will be targeting at. Though uploading perfect photos is not an easy task but with our team of experts we will upload the pictures after editing them, and we will also set the tone of the picture by manipulating its brightness, contrast and saturation level, and making them in contrast with the background and at the same time make them look appealing and attractive. As products will look appealing, therefore then they tend to attract more customers, which will definitely prove to be a major factor for the hike in sales.</p>

                                <p>Our reliable candidates have right knowledge with good experience to increase your profit.
                                    We have highly effective process of recruiting through testing and screening to offer just the cream to our clients. We provide high quality IT professionals to meet talent needs of our clients through permanent placements and staff augmentation.</p>
                                <p>This is the reason we are appreciated by our clients for streamlines execution and that is why we are getting repeat business from our existing clients.
                                    It is highly reliable and cost effective staffing solution you are looking for.</p>

                                <h4>From short assignment to full time hire, Tech2Globe have variety of staffing solutions.</h4>


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


            <ClientSlider testimonials={testimonials} />



        </>
    )
};