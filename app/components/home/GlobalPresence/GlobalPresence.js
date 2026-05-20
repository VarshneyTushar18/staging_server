import Style from "./GlobalPresence.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";


export default function GlobalPresence() {
    return (
        <>
            <div className={Style.WorldwideLocations}>
                <p className="sub-title text-uppercase text-center">GLOBAL PRESENCE</p>
                <h2 className="title text-center">Our Worldwide Offices</h2>
                <div className="container-fluid">
                    <div className="row g-4 justify-content-center justify-content-xl-center gap-4 px-2 mt-4 ">
                        <div className={`${Style.ContactCardCol} col-xxl-2 col-xl-2 col-lg-4 col-md-3 col-sm-6 col-12 px-3 px-sm-0`}>
                            <div className={Style.ContactCard}>
                                <div className="d-flex align-items-center mb-2">
                                    <Image src="/images/global-presence/us-flag.png" width = {45} height = {31} alt="US Flag"/>
                                </div>
                                <h6 className="ml-2 mb-2">NEW YORK</h6>
                                <p className="text-muted address">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    1538, Old Country Road, Plainview, New York, 11803
                                </p>
                                <p className="text-muted mb-1">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <a href="tel:+1-516-858-5840" className="hover-underline" aria-label="Call New York office at +1-516-858-5840">+1-516-858-5840 (Sales)</a>
                                </p>
                            </div>
                        </div>

                        <div className={`${Style.ContactCardCol} col-xxl-2 col-xl-2 col-lg-4 col-md-3 col-sm-6 col-12 px-3 px-sm-0`}>
                            <div className={Style.ContactCard}>
                                <div className="d-flex align-items-center mb-2">
                                    <Image src="/images/global-presence/ca-flag.png" width = {45} height = {31} alt="Canada Flag"/>
                                </div>
                                <h6 className="mb-2">MISSISSAUGA, CANADA</h6>
                                <p className="text-muted address">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    975 Mid-Way Blvd UNIT 12, Mississauga, ON L5T 2C6, Canada
                                </p>
                                <p className="text-muted mb-1">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <a href="tel:+1-516-858-4836" className="hover-underline" aria-label="Call Mississauga office at +1-516-858-4836">+1-516-858-4836 (Sales)</a>
                                </p>
                            </div>
                        </div>

                        <div className={`${Style.ContactCardCol} col-xxl-2 col-xl-2 col-lg-4 col-md-3 col-sm-6 col-12 px-3 px-sm-0`}>
                            <div className={Style.ContactCard}>
                                <div className="d-flex align-items-center mb-2">
                                    <Image src="/images/global-presence/ca-flag.png" width = {45} height = {31} alt="Canada Flag"/>
                                </div>
                                <h6 className="mb-2">PORT ALBERNI, CANADA</h6>
                                <p className="text-muted address">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    3836 Keeha Dr Port Alberni, BC, V9Y8C8, Canada
                                </p>
                                <p className="text-muted mb-1">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <a href="tel:+1-778-382-9628" className="hover-underline" aria-label="Call Port Alberni office at +1-778-382-9628">+1-778-382-9628 (Sales)</a>
                                </p>
                            </div>
                        </div>

                        <div className={`${Style.ContactCardCol} col-xxl-2 col-xl-2 col-lg-4 col-md-3 col-sm-6 col-12 px-3 px-sm-0`}>
                            <div className={Style.ContactCard}>
                                <div className="d-flex align-items-center mb-2">
                                    <Image src="/images/global-presence/in-flag.png" width = {45} height = {31} alt="India Flag"/>
                                </div>
                                <h6 className="mb-2">NOIDA, INDIA</h6>
                                <p className="text-muted address">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    701, 7th Floor, Tower B, Logix Cyber Park, C Block, Phase 2, Sector 62, Noida, Uttar Pradesh 201301
                                </p>
                                <p className="text-muted mb-1">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <a href="tel:+91-9899675039" className="hover-underline" aria-label="Call Noida, India office at +91-9899675039">+91-9899675039 (Sales)</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}