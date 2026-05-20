"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./Footer.module.css";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import GlobalPresence from "@/app/components/home/GlobalPresence/GlobalPresence";
import { usePathname } from "next/navigation";
import SocialSidebar from "@/app/components/SocialSidebar/SocialSidebar";

export default function Footer() {

    const pathname = usePathname();

    // Hide GlobalPresence only on contact-us page
    const hideGlobalPresence = pathname === "/contact-us";

    return (
        <>
            {!hideGlobalPresence && <GlobalPresence />}
            <footer className={Style.Footer}>
                <div className="container-fluid px-4 px-xl-5 position-relative">
                    <div className="row justify-content-evenly">

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-5 mb-xl-0">
                            <h5>Our Policies</h5>
                            <ul className="list-unstyled mb-0">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link href="/cookies-privacy-policy">Cookies</Link></li>
                                <li><Link href="/sitemap.xml">Sitemap</Link></li>
                            </ul>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-5 mb-xl-0">
                            <h5>More Info</h5>
                            <ul className="list-unstyled mb-0">
                                <li><Link href="/about-us">About Tech2Globe</Link></li>
                                <li><Link href="/our-partnerships">Our Partnerships</Link></li>
                                <li><Link href="/infrastructure">Infrastructure</Link></li>
                                <li><Link href="/values">Values</Link></li>
                                <li><Link href="/associations-ascription">Associations</Link></li>
                                <li><Link href="/clients">Clients</Link></li>
                                <li><Link href="/our-team">Our Team</Link></li>
                                {/* <li><Link href="/life-at-tech2globe">Life at Tech2globe</Link></li> */}
                            </ul>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-5 mb-xl-0">
                            <h5>Support</h5>
                            <ul className="list-unstyled mb-0">
                                <li><Link href="/contact-us">Contact Us</Link></li>
                                <li><Link href="/customer-support">24*7 Support</Link></li>
                                <li><Link href="/faq">FAQ</Link></li>
                            </ul>
                            <Link href="/career" className="mt-3"><Image src="/images/we-re-hiring.png" alt="We're hiring" width={150} height={96} className={`${Style.FooterHiring} img-fluid mt-3`} /></Link>
                            <ul className="list-unstyled mt-3">
                                <li><Link href="tel:+91-120-4983647"><FontAwesomeIcon icon={faPhone} style={{ width: '16px', height: '16px' }}></FontAwesomeIcon> +91-120-4983647 (HR)</Link></li>
                            </ul>
                        </div>

                        <div className={`${Style.FooterCertifications} col-12 col-sm-6 col-md-6 col-lg-5 col-xl-3 mb-4 mb-md-5 mb-xl-0`}>
                            <div className={`${Style.CertificationLogos} certification-logos d-flex flex-wrap`}>
                                <Link href="/pdf/305025090301q-tech2globewebsolutionsllp-iso900-20151.pdf">
                                    <Image src="/images/ISO_9001-2015.webp" alt="ISO 9001 2015" width={110} height={110} className="img-fluid rounded mb-3" />
                                </Link>
                                <Link href="/pdf/2025082219TECH2GLOBEWEBSOLUTIONSLLP-CMMILevel3UKCERT1.pdf">
                                    <Image src="/images/cmmi3.webp" alt="ISO 9001 2015" width={110} height={110} className="img-fluid rounded mb-3" />
                                </Link>
                                <Link href="/pdf/305025090302is-tech2globewebsolutionsllp-iso-iec27001-20221.pdf">
                                    <Image src="/images/iso-iec.webp" alt="ISO 9001 2015" width={110} height={110} className="img-fluid rounded mb-3" />
                                </Link>
                                <Link href="https://clutch.co/profile/tech2globe-web-solutions">
                                    <Image src="/images/footer/Clutch.png" alt="Tech2Globe Clutch Reviews" width={110} height={110} className="img-fluid mb-3" />
                                </Link>
                                <Link href="https://www.goodfirms.co/company/tech2globe-web-solutions-llp">
                                    <Image src="/images/footer/goodfirms.png" alt="Goodfirms" width={110} height={110} className="img-fluid mb-3" />
                                </Link>
                                <Link href="https://www.designrush.com/agency/profile/tech2globe">
                                    <Image src="/images/footer/DR-LOGO.png" alt="Tech2Globe Design Rush Review" width={110} height={110} className="img-fluid mb-3" />
                                </Link>
                                <Link href="https://www.trustpilot.com/review/tech2globe.com">
                                    <Image src="/images/footer/TrustPilot.png" alt="Tech2Globe Trustpilot Reviews" width={110} height={110} className="img-fluid mb-3" />
                                </Link>
                                <Link href="https://upcity.com/profiles/tech2globe-canada">
                                    <Image src="/images/footer/TDA.png" alt="Top Digital Agency | UP City" width={110} height={110} className="img-fluid mb-3" />
                                </Link>
                                <Link href="https://www.escindia.in/membership-certifica/tech2globe-web-solutions-llp/">
                                    <Image src="/images/footer/ESC-LOGO.png" alt="ESC Member" width={110} height={110} className="img-fluid mb-3" />
                                </Link>
                                <Link href="https://www.albernichamber.ca/directory/tech2globe-web-solutions-inc">
                                    <Image src="/images/footer/Alberni-Valley.png" alt="Alberni Valley Chamber of India" width={110} height={110} className="img-fluid mb-3" />
                                </Link>
                                <Link href="https://www.topseos.com/profile/tech2globe-web-solutions-llp">
                                    <Image src="/images/footer/top-seo-best-in-search.png" alt="Top Seos Best in Search" width={110} height={110} className="img-fluid mb-3" />
                                </Link>
                                <Link href="https://www.indiasoft.org/">
                                    <Image src="/images/footer/india-soft.png" alt="India Soft" width={110} height={110} className="img-fluid mb-3" />
                                </Link>
                                <Link href="https://litextension.com/partner.html">
                                    <Image src="/images/footer/litextensions.png" alt="Litextensions" width={110} height={110} className="img-fluid mb-3" />
                                </Link>
                                <Link href="https://agencies.gorgias.com/tech2globe-web-solutions">
                                    <Image src="/images/footer/gorgias-square-logo.png" alt="gorgias" width={110} height={110} className="img-fluid mb-3" />
                                </Link>
                                <Image src="/images/footer/DMCA.png" alt="DMCA Protected" width={110} height={110} className="img-fluid mb-3" />
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-6 col-lg-5 col-xl-3 mb-4 mb-md-5 mb-xl-0">
                            <div className="row">

                                <div className="col-12">
                                    <h5>Follow Us</h5>
                                    <div className={Style.SocialIcons}>
                                        <Link href="https://www.facebook.com/tech2globe.software" target="_blank" className={`${Style.Icon} ${Style.Facebook}`} aria-label="Follow us on Facebook"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></Link>
                                        <Link href="https://www.linkedin.com/company/tech2globe" target="_blank" className={`${Style.Icon} ${Style.Linkedin}`} aria-label="Follow us on LinkedIn"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></Link>
                                        <Link href="https://www.instagram.com/tech2globeweb/" target="_blank" className={`${Style.Icon} ${Style.Instagram}`} aria-label="Follow us on Instagram"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Link>
                                        <Link href="https://www.youtube.com/user/Tech2Globe" target="_blank" className={`${Style.Icon} ${Style.Youtube}`} aria-label="Watch us on YouTube"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></Link>
                                        <Link href="https://twitter.com/Tech2Globe" target="_blank" className={`${Style.Icon} ${Style.Twitter}`} aria-label="Follow us on Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="auto" viewBox="0 0 22 22" fill="">
                                            <path d="M16.7991 1.74512H19.8914L13.1356 9.46665L21.0833 19.9739H14.8603L9.9862 13.6013L4.40912 19.9739H1.31489L8.54098 11.7149L0.916664 1.74512H7.29768L11.7034 7.56992L16.7991 1.74512ZM15.7138 18.123H17.4273L6.36661 3.49882H4.52784L15.7138 18.123Z" fill=""></path>
                                        </svg></Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="row mt-4 text-center">
                        <div className="col-md-12 text-md-right mt-4 mt-md-0 text-center">
                            <p className="text-white">
                                &copy;  Copyright {new Date().getFullYear()} | All Rights Reserved by{" "}
                                <Link
                                    href="/"
                                    className="hover-underline"
                                    aria-label="Visit Tech2Globe's homepage"
                                >
                                    Tech2Globe
                                </Link>{" "}
                                |{" "}
                                <Link
                                    href="/contact-us"
                                    className="hover-underline"
                                    aria-label="Refer us page"
                                >
                                    Refer Us
                                </Link>{" "}
                                |{" "}
                                <Link
                                    href="/scam-alert"
                                    className="hover-underline"
                                    aria-label="Scam Alert page"
                                >
                                    Scam Alert
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

            </footer>

            <elevenlabs-convai agent-id="agent_0901k7egwwhhejatq2wv0gf0k1ax"></elevenlabs-convai><script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>

            <SocialSidebar />
        </>
    )
}