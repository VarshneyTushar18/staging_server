"use client";

import Image from "next/image";
import Link from "next/link";
import Style from "./BannerSection.module.css";
import "./custom.css";
import { FaArrowRight } from "react-icons/fa";

export default function BannerSection() {
  return (
    // <section className={Style.BannerSection}>
    //   <div id="home_wave" className={Style.HomeBanner}>
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-12">
    //           <h1 className="mb-4">
    //             Your Partner in AI-Enabled Development, Digital Marketing, eCommerce, Data Management, Business
    //             Intelligence & Operations.
    //           </h1>

    //           <p className="text-light my-4">
    //             <Link href="/e-commerce-development" className="hover-underline link-light">Ecommerce</Link> |{" "}
    //             <Link href="/web-development" className="hover-underline link-light">Web</Link> |{" "}
    //             <Link href="/mobile-app-development" className="hover-underline link-light">Mobile</Link> |{" "}
    //             <Link href="/call-centre-services" className="hover-underline link-light">BPO</Link> |{" "}
    //             <Link href="/virtual-assistant-services" className="hover-underline link-light">KPO</Link> |{" "}
    //             <Link href="/data-management-services" className="hover-underline link-light">Data Management</Link> |{" "}
    //             <Link href="/graphic-design-services" className="hover-underline link-light">Graphics</Link> |{" "}
    //             <Link href="/digital-marketing-services" className="hover-underline link-light">Digital Marketing</Link>
    //           </p>

    //           <div className={`${Style.CertifiedSection} my-4`}>
    //             <ul className="d-flex align-items-center p-0" style={{ listStyle: "none" }}>
    //               {[
    //                 "iso.webp",
    //                 "flipkart.webp",
    //                 "meta-bs-partner.webp",
    //                 "amazon_spn_logo.webp",
    //                 "google-partner-logo.png",
    //                 "Payoneer-Log.webp",
    //                 "shopify.webp",
    //                 "certificate.webp",
    //                 "ebay.webp",
    //                 "cmmi-3.png",
    //               ].map((img, idx) => (
    //                 <li className={Style.BgLight} key={idx}>
    //                   <Image
    //                     className="img-fluid"
    //                     src={`/images/homepage/banner/${img}`}
    //                     alt={img.replace(".webp", "").replace(".png", "")}
    //                     width={292}
    //                     height={150}
    //                   />
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>

    //           <div className="d-flex flex-wrap">
    //             <Link href="/contact-us" className="button-red mt-2 mx-0">REQUEST A QUOTE</Link>
    //             <Link href="/portfolio" className="button-red mt-2 ms-2">PORTFOLIO</Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner carouselFixed">
        <div className="carousel-item active h-100">
          <img src="images/homepage/banner/Ai-Banner-Demo-1.webp" className="d-block w-100 bannerImg" alt="..." />
          <div className="carouselOverlay"></div>
          <div className="carouselCaptionCustom">
            <div className="container h-100 d-flex align-items-center">
              <div className="carouselContent">
                <h1 className="carouselHeading">Transform Ideas Into AI Solutions</h1>
                <p className="carouselDesc">Hire AI Experts for Agents AI & Intelligent Agent Development</p>
                <div className="btnblock">
                  <Link href="https://www.tech2globe.ai" className="button-red mt-2 mx-0" target="_blank">Talk to an AI Expert <FaArrowRight /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item h-100">
          <img src="images/homepage/banner/Data-Banner-Demo-1.webp" className="d-block w-100 bannerImg" alt="..." />
          <div className="carouselOverlay"></div>
          <div className="carouselCaptionCustom">
            <div className="container h-100 d-flex align-items-center">
              <div className="carouselContent">
                <h1 className="carouselHeading">Data Mangement Solution</h1>
                <p className="carouselDesc">transforming data into organized, secure and actionable insights to drive better business decisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <div className="carouselArrowCircle">
          <span className="carousel-control-prev-icon carouselArrowIcon" aria-hidden="true"></span>
        </div>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <div className="carouselArrowCircle">
          <span className="carousel-control-next-icon carouselArrowIcon" aria-hidden="true"></span>
        </div>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
