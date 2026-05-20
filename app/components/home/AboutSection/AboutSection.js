import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./AboutSection.module.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

  const features = [
    "Expertise",
    "Development",
    "Flexibility",
    "Workforce",
    "Enthusiasm",
    "Communication",
  ];

export default function AboutSection() {
    return (
        <>
            <div className={Style.AboutSection}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <Image width={525} height={400} src="/images/about/logix-cyber-park-tech2globe-noida.png"
                                alt="Tech2Globe Web Solutions office at Logix Cyber Park in Noida" className="img-fluid rounded"
                                loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <p className="sub-title text-uppercase">About Our Company</p>
                            <h2 className="title">Tech2Globe: Your Trusted IT Consulting Partner for Professional Solutions</h2>
                            <p className="description">
                                Tech2Globe is an IT solutions and consultancy firm that assists visionaries in being
                                industry changemakers and defining business future.
                                We collaborate as one team with our clients with the common goal of achieving amazing
                                achievements, outperforming the competition,
                                and redefining industries. To offer better, faster, and more enduring results, we combine
                                our specialized, integrated knowledge
                                with our services. With over 14 years of experience in various industry verticals, we
                                uncover new sources to add value to your business.
                            </p>
                            <ul className={Style.Features}>
                                {features.map((item, index) => (
                                    <li key={index} className={Style.FeatureItem}>
                                        <FontAwesomeIcon icon={faCheckCircle} className="me-2"></FontAwesomeIcon> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}