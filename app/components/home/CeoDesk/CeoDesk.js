"use client";

import Image from "next/image";
import Style from "./CeoDesk.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function CeoDesk() {
    return (
        <section className={Style.CeoDesk}>
            <div className="container">
                <div className="row align-items-center justify-content-between">

                    {/* ===== Left Column (Text Content) ===== */}
                    <div className="col-lg-6 order-2 order-lg-1">
                        <p className="sub-title text-uppercase">FROM THE CEO&apos;s DESK</p>
                        <h2 className="title">
                            Our Commitment to Your Success: A Message From Our CEO
                        </h2>

                        <p className={Style.Description}>
                            Our inquisitive nature for innovation is the driving force behind everything
                            we do at Tech2Globe. We think that the digital world is dynamic and always
                            changing, and it is our obligation to stay on top of these changes. We seek to
                            create cutting-edge solutions that not only meet but surpass our clients&apos;
                            expectations, with an uncompromising dedication to excellence.
                        </p>

                        <p className={Style.Description}>
                            Our team of brilliant minds and their expertise is the foundation of our
                            success. Their unwavering quest of information, creative thinking, and
                            collaborative attitude is an embodiment of our company&apos;s culture.
                        </p>

                        <p className={Style.Description}>
                            Our purpose at Tech2Globe is to use technology to transform obstacles into
                            opportunities. We are motivated by a desire to add value to our clients and partners.
                        </p>

                        <p className={Style.Description}>
                            At Tech2Globe, our mission is to harness the power of technology to
                            transform challenges into opportunities. We strive to provide innovative and
                            reliable services that not only meet but exceed our clients&apos; expectations. We
                            are driven by a passion to create value for our customers and partners alike.
                        </p>

                        <hr className="my-4" />

                        {/* ===== CEO Info Section ===== */}
                        <div className={Style.FounderInfo}>
                            <div className={Style.Thumb}>
                                <Image
                                    src="/images/ceo-desk/harpreet-singh-sethi-thumbnail.png"
                                    alt="Harpreet Singh Sethi | CEO, Tech2Globe"
                                    title="Harpreet Singh Sethi | CEO, Tech2Globe"
                                    width={100}
                                    height={100}
                                    className="img-fluid rounded"
                                />
                            </div>

                            <div className={Style.Info}>
                                <p className={Style.Name}>Harpreet Singh Sethi</p>
                                <span className={Style.Designation}>CEO & Founder</span>
                            </div>

                            <div className="linkedin">
                                <a
                                    href="https://www.linkedin.com/in/harpreet-singh-sethi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Harpreet Singh Sethi LinkedIn Profile"
                                >
                                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ===== Right Column (Image) ===== */}
                    <div className="col-lg-5 mb-4 mb-lg-0 order-1 order-lg-2">
                        <div className={`${Style.CeoImage} text-center position-relative`}>
                            <Image
                                src="/images/ceo-desk/harpreet-singh-sethi.png"
                                alt="Harpreet Singh Sethi | CEO, Tech2Globe"
                                title="Harpreet Singh Sethi | CEO, Tech2Globe"
                                width={500}
                                height={600}
                                className="img-fluid w-75"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
