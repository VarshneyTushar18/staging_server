import React from "react";
import Link from "next/link";
import Style from "./expertise.module.css"

export default function Expertise() {
  return (
    <section className={`${Style.ExpertiseSection} w-100 h-auto d-block position-relative py-5 bg-dark`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="title text-white mb-3">
              Navigating the Complexities of Business Advancement Through Expertise
            </h2>

            <p className="text-white mx-auto mb-5">
              Tech2Globe is a team of smart and dedicated people who are experts in
              providing innovative services. We create customized solutions and help
              our clients achieve great success in their businesses. Our wide range
              of services improves and speeds up various aspects of business
              operations, ensuring that our clients not only reach their goals but go
              beyond them.
            </p>

            <ul className={`${Style.IconBoxWrapper} d-flex flex-wrap justify-content-center align-items-center list-unstyled gap-3`}>
              <li className="text-center">
                <Link href="/amazon-consulting-services" className="text-decoration-none text-white">
                  <figure>
                    <img
                      src="/images/about/amazon-consulting-icon.png"
                      alt="Amazon Consulting"
                      className="img-fluid"
                    />
                  </figure>
                  <h6>Amazon Consulting</h6>
                </Link>
              </li>

              <li className="text-center">
                <Link
                  href="/online-business-management-amazon-com"
                  className="text-decoration-none text-white"
                >
                  <figure>
                    <img
                      src="/images/about/ecommerce-management-icon.png"
                      alt="Ecommerce Management"
                      className="img-fluid"
                    />
                  </figure>
                  <h6>Ecommerce Management</h6>
                </Link>
              </li>

              <li className="text-center">
                <Link href="/call-centre-services" className="text-decoration-none text-white">
                  <figure>
                    <img
                      src="/images/about/bpo-kpo-icon.png"
                      alt="BPO-KPO"
                      className="img-fluid"
                    />
                  </figure>
                  <h6>BPO-KPO</h6>
                </Link>
              </li>

              <li className="text-center">
                <Link href="/financial-accounting-services" className="text-decoration-none text-white">
                  <figure>
                    <img
                      src="/images/about/finance-and-accounting-icon.png"
                      alt="Finance and Accounting"
                      className="img-fluid"
                    />
                  </figure>
                  <h6>Finance &amp; Accounting</h6>
                </Link>
              </li>

              <li className="text-center">
                <Link href="/data-management-services" className="text-decoration-none text-white">
                  <figure>
                    <img
                      src="/images/about/data-management-and-analytics-icon.png"
                      alt="Data Management and Analytics"
                      className="img-fluid"
                    />
                  </figure>
                  <h6>Data Management &amp; Analytics</h6>
                </Link>
              </li>

              <li className="text-center">
                <Link href="/digital-marketing-services" className="text-decoration-none text-white">
                  <figure>
                    <img
                      src="/images/about/digital-marketing-icon.png"
                      alt="Digital Marketing"
                      className="img-fluid"
                    />
                  </figure>
                  <h6>Digital Marketing</h6>
                </Link>
              </li>

              <li className="text-center">
                <Link href="/software-development" className="text-decoration-none text-white">
                  <figure>
                    <img
                      src="/images/about/web-and-mobile-icon.png"
                      alt="Web and Mobile Development"
                      className="img-fluid"
                    />
                  </figure>
                  <h6>Web and Mobile Development</h6>
                </Link>
              </li>

              <li className="text-center">
                <Link href="/photo-editing-services" className="text-decoration-none text-white">
                  <figure>
                    <img
                      src="/images/about/graphic-and-video-editing-icon.png"
                      alt="Graphic and Video Editing"
                      className="img-fluid"
                    />
                  </figure>
                  <h6>Graphic &amp; Video Editing</h6>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
