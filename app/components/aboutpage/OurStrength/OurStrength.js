import React from "react";
import Style from "./OurStrength.module.css";

export default function OurStrength() {
  return (
    <section className="about-our-strength-section w-100 h-auto d-block position-relative py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <div className="title-section text-center m-auto">
              <p className="sub-title text-uppercase">Team Process</p>
              <h2 className="title">Our Strengths</h2>
            </div>
          </div>
        </div>

        {/* Grid layout instead of col-6 */}
        <div className={`${Style.GridWrapper} about-strength-4-services`}>

          <div className={Style.StrengthCard}>
            <figure className="mb-3">
              <img
                src="/images/about/digital-arsenal-icon.png"
                alt="Digital Arsenal Icon"
                className="img-fluid"
              />
            </figure>
            <h4>Digital Arsenal</h4>
            <p>
              Deep within the depths of our fortunate success lies an
              unparalleled ability to harness the ever-evolving landscape of
              cutting-edge technologies and industry&apos;s most top-notch
              practices. From the intricacies of comprehensive SEO strategies to
              extensive data management, we embark on a lively journey, leaving
              no stone unturned, as we strive to embolden your brand&apos;s
              presence.
            </p>
          </div>

          <div className={Style.StrengthCard}>
            <figure className="mb-3">
              <img
                src="/images/about/collaboration-partnership-icon.png"
                alt="Collaboration Partnership Icon"
                className="img-fluid"
              />
            </figure>
            <h4>Collaborative Partnership</h4>
            <p>
              At Tech2Globe, we believe in building honest and open partnerships
              with our valued clients. We go beyond just having a contract and
              become a vital part of your team. We work tirelessly with you,
              utilizing the immense power of your mind and our expertise to
              achieve success. Our team of experienced professionals spends a
              significant amount of time understanding your business and getting
              to the heart of your ideas.
            </p>
          </div>

          <div className={Style.StrengthCard}>
            <figure className="mb-3">
              <img
                src="/images/about/ethics-and-integrity-icon.png"
                alt="Ethics and Integrity Icon"
                className="img-fluid"
              />
            </figure>
            <h4>Ethics and Integrity</h4>
            <p>
              At Tech2Globe, we strongly believe in ethics and honesty. We are
              committed to conducting business with transparency, honesty, and
              respect. Our dedicated team follows high standards and best
              practices to ensure integrity in every aspect of our work. Your
              brand&apos;s reputation is highly valued and protected with utmost
              trust and care in our company.
            </p>
          </div>

          <div className={Style.StrengthCard}>
            <figure className="mb-3">
              <img
                src="/images/about/customer-centric-approach-icon.png"
                alt="Customer-Centric Approach Icon"
                className="img-fluid"
              />
            </figure>
            <h4>Customer-Centric Approach</h4>
            <p>
              We highly value your satisfaction above all else. Our team is
              dedicated to providing you with a smooth and transparent
              experience. We strive to give you all the information you need and
              keep communication open. This way, we empower you, the curious
              learner, with the knowledge and wisdom to make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
