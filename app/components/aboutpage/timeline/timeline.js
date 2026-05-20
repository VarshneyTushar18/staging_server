import React from "react";
import Style from "./timeline.module.css";

export default function Timeline() {
  return (
    <section className={`${Style.TimelineWrapper} w-100 h-auto d-block position-relative py-5`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title text-center pb-3">
              Tech2Globe, A Platform To Convert Your Business Dreams Into Reality
            </h2>

            <p>
              Tech2Globe Web Solutions is a renowned solution-provider that was
              established in 2014. With the superior quality of our services, we
              have managed to carve out a coveted position for ourselves in this
              fiercely competitive sector.
            </p>

            <p>
              We provide you with real, reasonable services and an unwavering
              customer-centric approach thanks to the top talent in the business.
              Our offerings include anything from web design and content creation
              to software development and e-marketing.
            </p>

            <ol className="position-relative ps-3">
              <li className="position-relative mb-4">
                <h5>Our Journey: From Vision to Reality</h5>
                <p>
                  The story of Tech2Globe began with a compact team of marketing
                  and web developing enthusiasts and their commitment to optimize
                  technology for transforming businesses in the digital spectrum.
                  We set out on a quest to close the gap between businesses and
                  their objectives for going digital. Furthermore, we have
                  developed into a powerful force over the years, serving clients
                  from a variety of industries and assisting them in thriving in
                  the always changing digital ecosystem.
                </p>
              </li>

              <li className="position-relative mb-4">
                <h5>Our Expertise: Always Delivering Excellence</h5>
                <p>
                  At Tech2Globe, we are ready for any challenge with a team of
                  people who are passionate about innovation, have a sharp eye for
                  detail, and consistently push the boundaries of technology. Our
                  professionals have a broad range of specialties, including
                  online marketing, ecommerce, IT consulting, and BPO/KPO.
                  Additionally, we have data management, data support for AI
                  software and tools, software development, web design, and
                  digital marketing — and they are well-versed in these fields and
                  capable of providing top-notch solutions.
                </p>
              </li>

              <li className="position-relative mb-4">
                <h5>Tailored Solutions: Because Customer Always Comes First</h5>
                <p>
                  We completely understand that every company is different, with
                  its own set of difficulties and goals. Every client is treated
                  individually at Tech2Globe, and specialized solutions are
                  created to meet each client&apos;s requirements. We have a track
                  record of providing results that go above and beyond
                  expectations for small businesses as well as large international
                  firms.
                </p>
              </li>

              <li className="position-relative">
                <h5>Global Footprint: Beyond Boundaries</h5>
                <p>
                  Despite the fact that we have deep roots in our hometown, we
                  have expanded to serve clients on a global scale. We have
                  delivered our services in over 25 countries including Germany,
                  USA, Canada, Singapore, Guatemala, India, UAE, Hong Kong, and
                  others. Our international clientele, which comes from a wide
                  range of businesses, spans multiple continents like Asia and
                  North America. Our knowledge, adaptability, and unwavering
                  dedication to quality are evidenced by our capacity to adapt and
                  serve clients from all over the world.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
