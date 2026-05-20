import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Style from "./style.module.css";
import BrandSection from "../components/home/BrandSection/BrandSection";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";

const sidebarSections = [
    
];

export default function ScamAlert() {
    return (
        <>
            <section className={Style.BannerAlert}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                            <h1 className="text-center text-white">Scam Alert : Beware of Impersonators Claiming to be Tech2Globe</h1>
                            <a href="/contact-us" class="btn btn-danger rounder text-light mt-4" target="_blank">Report A Scam </a>
                        </div>
                    </div>
                </div>
            </section>
            <Breadcrumb pageName="Scam Alert" />
            <BrandSection/>
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <p>Recently, Tech2Globe discovered that scammers have been utilizing our staff names, logo, picture, and brand name to commit fraud on a variety of platforms and channels. We strongly disagree and do not condone these unlawful practices.</p>

                                <p>As a firm, we&apos;re dedicated to taking preventative action to protect our clients, staff, brand, and you from these fraudulent activities.</p>

                                <h2 className="pb-3">Some Helpful Points to Remember:</h2>
                                <p>Recognizing these common signs of a scam could help you avoid one. Remember that scammers:</p>
                                
                                <ul>
                                    <li className="pb-2">Contact you out of the blue.</li>
                                    <li className="pb-2">Pretend to be from a well-known organization or contact.</li>
                                    <li className="pb-2">Pressure you to act immediately.</li>
                                    <li className="pb-2">Suggest their own verification procedures, such as calling or texting numbers they provide to you or going to a website they have created.</li>
                                    <li className="pb-2">Send unsolicited emails, text messages or social media messages claiming to be someone else.</li>
                                    <li className="pb-2">Trick you into giving access to sensitive information, such as your social security number, bank account or credit card details.</li>
                                    <li className="pb-2">Prey on your emotions.</li>
                                    <li className="pb-2">Ask you to keep a transaction a secret.</li>
                                    <li>Make their offer sound too good to be true.</li>
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
        </>
    )
}