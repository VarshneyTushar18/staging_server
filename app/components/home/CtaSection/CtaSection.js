import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import Style from "./CtaSection.module.css";
export default function CtaSection() {
    return (
        <>
            <div className={Style.CtaSection}>
                <div className="container d-flex" data-="fade-up" data--duration="500">
                    <div className={Style.CtaContent}>
                        <h2>Ready to Grow Your Business?</h2>
                        <p>Send us your requirements on <a href="mailto:info@tech2globe.com" className="hover-underline"
                            aria-label="Email Tech2Globe for business requirements">info@tech2globe.com</a></p>
                    </div>
                    <a href="#contact-us" className={Style.CtaButton}>
                        <FontAwesomeIcon icon={faCommentDots} className={Style.CtaIcon} />&nbsp;&nbsp;Contact Us
                    </a>
                </div>
            </div>
        </>
    )
}