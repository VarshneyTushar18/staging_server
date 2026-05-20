import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Style from "./style.module.css";
import ClientSlider from "../components/services/ClientSlider/ClientSlider";

const pageHeaderData = {
    title: "Cookie Policy",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

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
        name: "Andriana– Amazon Sponsored Ads USA",
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
        name: "Medi Hub- Amazon Store Creations USA",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
        name: "Teliamed– Amazon Enhance Brand Content USA",
    },
];

export default function CookiePrivacyPolicy() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Cookie Policy" />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger">Tech2Globe Cookie Policy</h2>
                                <p>To improve your experience on our site Tech2Globe utilizes cookies. Cookies are the common practice of using small files placed in your computer&apos;s browser to store user preferences that are unique to your computer and, can only be interpreted by the server that provided them.</p>

                                <p>Cookies, by themselves, do not store personally identifiable information. If you choose to provide Tech2Globe with personal information via one of our site&apos;s features, it may be linked to data contained within a cookie.</p>

                                <p>Tech2Globe uses cookie data to enhance the offerings on our site by understanding site usage. When you submit data through forms such as those found on the Contact Us page or engage through our chat features, cookies may be set to remember your user details for future correspondence. In some cases, we also use cookies provided by trusted third parties.</p>

                                <p>If you choose to control the cookies you accept, you can do so by adjusting the settings on your browser (see your browser Help for more info). You can set browser options to not receive cookies, as well as delete existing cookies from your browser. Please be advised that disabling cookies may affect the functionality of this site and that if you do not configure your browser you will accept cookies provided by this website.</p>

                                <p>Please see our <a href="/privacy-policy/" className="text-decoration-underline fw-bold">Privacy Policy</a> for more details regarding our use of personal information.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ClientSlider testimonials={testimonials} />
        </>
    )
}