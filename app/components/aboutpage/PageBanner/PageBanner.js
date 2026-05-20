import React from "react";
import Style from "./PageBanner.module.css";

export default function PageBanner() {
  return (
    <section className={`${Style.FeatureBanner} w-100 h-100 d-block position-relative bg-dark`}>
      <img
        src="/images/about/about-feature-image.jpg"
        alt="Feature Banner Background"
        className="img-fluid opacity-50 w-100 h-100"
        style={{ objectFit: "cover" }}
      />

      <div className="position-absolute w-100 top-0 start-0 h-100 d-flex justify-content-center align-items-center">
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <h1
                className="text-white">
                Your Partner in IT Excellence and Marketing Mastery
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
