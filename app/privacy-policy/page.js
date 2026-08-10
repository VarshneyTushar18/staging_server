import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Style from "./style.module.css";

export const metadata = {
    title: "Privacy Policy - Tech2Globe",
    description:
        "Discover Tech2Globe’s privacy policy outlining our commitment to protecting your data and ensuring transparency in our practices.",

    openGraph: {
        title: "Privacy Policy - Tech2Globe",
        description:
            "Discover Tech2Globe’s privacy policy outlining our commitment to protecting your data and ensuring transparency in our practices.",
        url: "https://www.tech2globe.com/Privacy-Policy",
        type: "website",
        siteName: "Tech2Globe",
    },

    twitter: {
        title: "Privacy Policy - Tech2Globe",
        description:
            "Discover Tech2Globe’s privacy policy outlining our commitment to protecting your data and ensuring transparency in our practices.",
        card: "summary_large_image",
    },

    alternates: {
        canonical: "https://www.tech2globe.com/Privacy-Policy",
    },
};

const pageHeaderData = {
    title: "Privacy Policy",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};


export default function PrivacyPolicy() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Privacy Policy" />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger">Privacy Policy</h2>
                                <h5>We do have different privacy and policies for clients as well as employees too.</h5>
                                <h4>1.Overview</h4>
                                <p>We, at Tech2globe, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information which is received and collected by us how it is used.we do take care of the priorities of our clients as well as employees.Your privacy, and the privacy of the information provided to us by you is important to us. We do use reasonable care to protect your data from loss, misuse, unauthorized access, disclosure, alteration and untimely destruction. We do not grant access to personal information about you except as otherwise set forth herein.</p>

                                <h4>2.Terms</h4>
                                <p>We do not share or sell the personal information collected on the site by us with any third parties for their own marketing purposes. Tech2globe is committed to protecting the privacy of our employees, our customers, and their employees. As part of this commitment, Tech2globe has established a privacy program that demonstrates our due diligence to privacy laws.</p>

                                <h4>3.Information Collection and Use</h4>
                                <p>Firstly we do try to take less personal information of our client so that our client could feel comfortable in working with us and our website which is been asked to the client for the product services and to fulfill any legal and regulatory requirements.</p>

                                <h4>4.Info that we collect from our Employee</h4>
                                <ul>
                                    <li>Our Tech2globe do collect Contact information to allow us to communicate with you.</li>
                                    <li>Our Tech2globe do collect employees information, including financial and bank account information, to provide the Services .</li>
                                    <li>Our Tech2globe do collect Employee information, including social security number, date of birth, financial, bank account, bio metric, geolocation, medical and beneficiary information, to provide the Services.</li>
                                    <li>Our Tech2globe do collect Employment history and application information that can be used to determine eligibility for a job opening via our recruiting module.</li>
                                </ul>

                                <h4>5.Info that we collect from clients</h4>
                                <p>Information we collect about your use of our Site or Products may, for example, include:</p>
                                <ul>
                                    <li>The Internet Protocol (“IP”) address of your Internet Service Provider.</li>
                                    <li>The content you access.</li>
                                    <li>The functions, products, or services you use on the Site or Products.</li>
                                    <li>Your computer’s operating system.</li>
                                    <li>Up-time and other usage statistics about the Site or Products.</li>
                                    <li>Location information.</li>
                                    <li>Your computer’s unique identifier (e.g., CPU serial number).</li>
                                    <li>Web browser used.</li>
                                    <li>The date and time of your visit to the Site or use of the Product.</li>
                                </ul>

                                <h4>6.Changes to privacy policy</h4>
                                <p>We reserve the right to change this Privacy Policy at any time. When we make changes, we will post the changed Privacy Policy at this site and it will become effective immediately. Your continued access to or use of the Site or Product represents you acceptance of such changed privacy policy.</p>

                                <h4>7.Contact us</h4>
                                <p>If you have any query regarding our privacy policy you can also directly ask us through mails or through our website <a href="mailto:info@tech2globle.com">info@tech2globle.com</a></p>

                                <h4>8.Security of Collected Information</h4>
                                <p>We are committed to protecting the security of the information collected, and we take reasonable physical, electronic, and administrative safeguards to help protect the information from unauthorized or inappropriate access or use. It is your responsibility to protect the confidentiality of your passwords, account information, and any other access features associated with your access or use of the Site or Product as well as adhering to any applicable Terms of Use or other contract between us and you or your organization.</p>

                                <h4>9. Support</h4>
                                <p>Our team do provide you the full support in case of any inconvenience you may can contact us directly and we do try to never give you the chance to feel any obstacle in our relation with you.</p>

                                <h4>10.Quality</h4>
                                <p>Our team do provide you the best of our company so that you may get satisfied by our work and even our team which is specialized in their departments do provide you the best results by taking your requirements as our priority.we are ISO certified and we do take our work as our duty and try to make you utilize our website.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}