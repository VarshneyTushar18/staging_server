import React from "react";
import Style from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={`${Style.AboutPage} w-100 h-auto d-block position-relative py-5`}>
      <div className="w-100 h-auto d-block position-relative">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
              <p className="sub-title text-uppercase">About Us</p>
              <h2 className="title">Empowering Your Online Success</h2>

              <p>
                Reliability, actuality, and results are all associated with the
                name Tech2Globe. We are a group of eminent specialists who put
                in an ocean of effort to deliver excellent business solutions
                and achieve the goals of their clients. We manage every stage of
                a project, from conception to completion, to effectively
                accomplish its intended aim.
              </p>

              <div className={`${Style.AboutCounter} d-flex flex-wrap mt-4`}>
                <div className={`${Style.CounterBlock} mb-3`}>
                  <strong>14+</strong>
                  <p className="mb-0">Years of Excellence</p>
                </div>

                <div className={`${Style.CounterBlock} mb-3`}>
                  <strong>10+</strong>
                  <p className="mb-0">Industry Verticals</p>
                </div>

                <div className={`${Style.CounterBlock} mb-3`}>
                  <strong>300+</strong>
                  <p className="mb-0">Seasoned Professionals</p>
                </div>

                <div className={`${Style.CounterBlock} mb-3`}>
                  <strong>7000+</strong>
                  <p className="mb-0">Successful Projects</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <ul className="list-unstyled position-relative">
                <li className={`${Style.IntroImageOne} mb-3`}>
                  <figure className="mb-0">
                    <img
                      src="/images/about/corporate-building.jpg"
                      alt="Corporate Building"
                      className="img-fluid"
                    />
                  </figure>
                </li>

                <li className={`${Style.IntroImageTwo}`}>
                  <figcaption>
                    <figure className="mb-0">
                      <img
                        src="/images/about/empowering-your-online-success-picture-b.jpg"
                        alt="Customer Satisfaction"
                        className="img-fluid"
                      />
                      <div className="position-absolute bottom-0 start-0 p-3 w-100">
                        <strong className="d-block text-white">
                          CUSTOMER SATISFACTION
                        </strong>
                        <h5 className="text-white mb-0 pb-2">99%</h5>
                      </div>
                    </figure>
                  </figcaption>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
