import Link from "next/link";
import Style from "./WhychooseUs.module.css";

export default function WhychooseUs() {
  return (
    <section className="about-get-your-footprints-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p class="sub-title text-uppercase">Why Choose Us?</p>
            <h2 class="title">Get Your Footprints On Digital Globe With Tech2Globe</h2>

            <p>
              Are you ready to embark on an extraordinary expedition? Whether
              you&apos;re a daring startup hungry for success or a renowned brand
              yearning for digital metamorphosis, fear not, for Tech2Globe is
              your steadfast guide. We vow to accompany you every step of the
              way, illuminating your path to unparalleled heights of triumph.
            </p>

            <p>
              Prepare to witness the unfathomable process of our esteemed team
              of experts as they unravel the boundless potential of your brand
              within the digital realm. With an avid desire to comprehend your
              distinctive hurdles, ambitions, and aspirations, we shall weave a
              custom-to-master strategy that seamlessly aligns with your
              business objectives.
            </p>

            <aside className="mt-4">
              <Link href="/contact-us" className={Style.ChooseBtn}>
                Contact Now
              </Link>
            </aside>
          </div>

          {/* Right Column */}
          <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-6 col-sm-12">
            <figure className="position-relative mb-0">
              <img
                src="/images/about/human-resources-concept-with-man_23-2150389099.jpg"
                alt="Human resources concept"
                className={`${Style.BlockImage} img-fluid`}
              />
              <span
                className={`${Style.PlayIcon} position-absolute top-50 start-50 translate-middle`}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ cursor: "pointer" }}
              ></span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
