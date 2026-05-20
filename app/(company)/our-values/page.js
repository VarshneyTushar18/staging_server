import React from "react";

export default function OurValues() {
  return (
    <>
      {/* 🔹 Top Banner Section */}
      <div className="our-value-inner-banner w-100 h-auto d-block position-relative pb-5">
        <img
          src="/images/our-values/Epic-t2g-banner-top.png"
          alt="EPIC Banner"
          className="w-100 img-fluid"
        />
      </div>

      <section className="container py-5">
        <div className="row pb-3">
          {/* Heading Section */}
          <div className="col-12">
            <h1 className="text-danger">Our Values</h1>
            <p>
              As a member of our esteemed team, you will have the privilege of
              being a part of something truly extraordinary. We take immense
              pride in our core values of excellence, people, integrity, and
              collaboration — the foundation upon which our organization stands
              and that is EPIC for us. These values are at the very essence of
              everything we do and set us apart from our competitors.
            </p>
            <p>
              By joining our team, you will be a part of something truly
              remarkable, an organization that is committed to pushing the
              boundaries of technology and making a significant impact on the
              world.
            </p>
          </div>

          <div className="col-12">
            <div className="row d-flex align-items-center flex-md-row flex-column-reverse">
              <div className="col-lg-9 col-md-9 col-sm-12">
                <h2 className="text-dark">
                  <strong>E - Excellence</strong>
                </h2>
                <p className="text-start">
                  Welcome to Tech2Globe, where innovation and excellence
                  converge. As a leader in technology, we are driven by a
                  passion for innovation and a commitment to exceptionalism. We
                  understand that technology is constantly evolving, and staying
                  ahead of the curve requires a relentless pursuit of
                  perfection. This is why we strive for the highest standards of
                  excellence in all aspects of our operations, from the products
                  and services we offer to our interactions with customers and
                  colleagues.
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 wpb_single_image text-center mb-3 mb-md-0">
                <img
                  src="/images/our-values/excellence.jpg"
                  alt="Excellence"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          <hr />

          {/* P - People */}
          <div className="col-12">
            <div className="row d-flex align-items-center">
              <div className="col-lg-3 col-md-3 col-sm-12 wpb_single_image text-center mb-3 mb-md-0">
                <img
                  src="/images/our-values/people.jpg"
                  alt="People"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12">
                <h2 className="text-dark">
                  <strong>P - People</strong>
                </h2>
                <p className="text-start">
                  At the heart of our organization is people. At Tech2Globe, we
                  value each team member and strive to foster a culture of
                  inclusivity and respect. We recognize that our success is
                  contingent upon the talents and contributions of our
                  employees. Thus, we value each team member and strive to
                  foster a culture of inclusivity and respect, where everyone
                  feels valued and appreciated, regardless of age, experience,
                  and background. Our senior team members play an instrumental
                  role in mentoring and guiding the younger members of the team,
                  while our team leaders lead by example, fostering a positive
                  work environment that encourages team members to excel.
                </p>
              </div>
            </div>
          </div>

          <hr />

          {/* I - Integrity */}
          <div className="col-12">
            <div className="row d-flex align-items-center flex-md-row flex-column-reverse">
              <div className="col-lg-9 col-md-9 col-sm-12">
                <h2 className="text-dark">
                  <strong>I - Integrity</strong>
                </h2>
                <p className="text-start">
                  At Tech2Globe, integrity is not just a principle — it is a way
                  of life. We firmly believe that a strong foundation of honesty
                  and transparency is the key to building a successful
                  organization. We hold ourselves to the highest ethical
                  standards and are committed to conducting ourselves with
                  integrity in every situation. When you work with us, you can
                  trust that you&apos;re partnering with an organization that puts
                  integrity at the forefront of everything we do. With
                  Tech2Globe, you can have peace of mind knowing that you&apos;re
                  working with a team that prioritizes honesty, transparency,
                  and ethical conduct in all that we do.
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 wpb_single_image text-center mb-3 mb-md-0">
                <img
                  src="/images/our-values/integrity.png"
                  alt="Integrity"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          <hr />

          {/* C - Collaboration */}
          <div className="col-12">
            <div className="row d-flex align-items-center">
              <div className="col-lg-3 col-md-3 col-sm-12 wpb_single_image text-center mb-3 mb-md-0">
                <img
                  src="/images/our-values/Collaboration.jpg"
                  alt="Collaboration"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12">
                <h2 className="text-dark">
                  <strong>C - Collaboration</strong>
                </h2>
                <p className="text-start">
                  Collaboration is essential to our success. We recognize that
                  by working together, we can achieve more than we ever could
                  individually. Therefore, we actively encourage open
                  communication, shared decision-making, and the exchange of
                  ideas and perspectives among our team. Our organization
                  comprises individuals who are dedicated to achieving common
                  goals through collaboration. We believe that by fostering a
                  culture of teamwork, we can accomplish remarkable things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
