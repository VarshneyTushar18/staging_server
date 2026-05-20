import ContactForm from "../components/contact/ContactForm/ContactForm";
import WorldMapLocations from "../components/contact/worldmaplocations/MapLocations";
import Style from "./style.module.css";
import Image from "next/image";

export const metadata = {
    title: "Contact Us at Tech2globe IT Solution Company",
    description:
        "For more information on any of our services or solutions, please contact us today, either via email or by phone or by filling out our Quotation Form.",

    openGraph: {
        title: "Contact Us at Tech2globe IT Solution Company",
        description:
            "For more information on any of our services or solutions, please contact us today, either via email or by phone or by filling out our Quotation Form.",
        siteName: "Tech2Globe web Solutions LLP",
        url: "https://www.tech2globe.com/contact-us",
        type: "website"
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Us at Tech2globe IT Solution Company",
        description:
            "For more information on any of our services or solutions, please contact us today, either via email or by phone or by filling out our Quotation Form."
    },

    alternates: {
        canonical: "https://www.tech2globe.com/contact-us"
    }
};

const locations = [
    {
        flag: "/images/india-flag-icon.webp",
        country: "Tech2Globe INDIA",
        city: "Noida",
        address:
            "701, 7th Floor, Tower B, Logix Cyber Park, C Block, Phase 2, Sector 62, Noida, Uttar Pradesh 201301",
        phone: "+91-9899675039 (Sales)",
        tel: "+91-12-04983647",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5819592040098!2d77.36375087450915!3d28.612315385000244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5687a962671%3A0x5d66885cf442835e!2sLogix%20Cyber%20Park!5e0!3m2!1sen!2sin!4v1715434427908!5m2!1sen!2sin",
    },

    {
        flag: "/images/america-flag-icon.webp",
        country: "Tech2Globe USA",
        city: "New York",
        address:
            "1538, Old Country Road, Plainview, New York, United States - 11803",
        phone: "+1-516-858-5840 (Sales)",
        tel: "",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.1480955158786!2d-73.45273542342755!3d40.780758233402615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82a13cb89b2bd%3A0x273519364b01e220!2s1538%20Old%20Country%20Rd%2C%20Plainview%2C%20NY%2011803%2C%20USA!5e0!3m2!1sen!2sin!4v1692616297050!5m2!1sen!2sin",
    },

    {
        flag: "/images/canada-flag-icon.webp",
        country: "Tech2Globe CANADA",
        city: "Ontario",
        address:
            "975 Mid-Way Blvd UNIT 12 Mississauga, ON L5T 2C6, Canada",
        phone: "+1-778-382-9628 (Sales)",
        tel: "",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3906987381297!2d-79.67975997331978!3d43.66084365193565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3ffa57f893dd%3A0xc384479df95f230a!2sTech2Globe%20Canada%20-%20Online%20Marketing%20Agency%20%7C%20Ecommerce%20Solutions%20%7C%20Software%20Development!5e0!3m2!1sen!2sin!4v1692616357794!5m2!1sen!2sin",
    },

    {
        flag: "/images/canada-flag-icon.webp",
        country: "Tech2Globe CANADA",
        city: "Vancouver",
        address:
            "3836 Keeha Dr Port Alberni, BC, V9Y8C8, Canada",
        phone: "+1-516-858-4836 (Sales)",
        tel: "",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.189802039957!2d-124.81174372309215!3d49.234890574136685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5488f773ae31937b%3A0x854f3f0ada5169cb!2sTech2Globe%20Web%20Solutions%20INC.!5e0!3m2!1sen!2sin!4v1692616404351!5m2!1sen!2sin",
    },
];

export default function ContactUs() {
    return (
        <>

        <ContactForm/>
        <WorldMapLocations/>

            <div className={`${Style.AddressSection} py-4`}>
                <div className="container">
                    <div className="row g-4">

                        {locations.map((loc, index) => (
                            <div className="col-lg-3 col-md-3 col-sm-12" key={index}>
                                <div className="p-2 h-100">

                                    <div className="text-center mb-2">
                                        <Image
                                            src={loc.flag}
                                            alt="Country flag"
                                            width={50}
                                            height={38}
                                            className="img-fluid"
                                        />
                                    </div>

                                    <h5 className="fw-medium text-center">{loc.country}</h5>

                                    <p className="text-center mb-0">{loc.city}</p>

                                    <p className={`${Style.AddressText} text-center`}>{loc.address}</p>

                                    <div className="text-center">
                                        <small className="text-danger fw-medium">
                                            Phone No.:
                                            <a href={`tel:${loc.phone}`}>
                                                {loc.phone}
                                            </a>
                                        </small>
                                    </div>

                                    {loc.tel && (
                                        <div className={`${Style.TelBlock} text-center`}>
                                            <small className="text-danger fw-medium">
                                                Tel:
                                                <a href={`tel:${loc.tel}`}>
                                                    {loc.tel}
                                                </a>
                                            </small>
                                        </div>
                                    )}

                                    <div className="mt-3">
                                        <iframe
                                            src={loc.map}
                                            className="w-100"
                                            height="250"
                                            loading="lazy"
                                            allowFullScreen
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}