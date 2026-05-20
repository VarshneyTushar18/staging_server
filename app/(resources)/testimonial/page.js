import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const metadata = {
  title: "Client Testimonials : Our Tech2globe Client Responses",
  description: "We are extremely proud of the response we have received from our clients for the quality and timely delivery of our work and our commitment to their success.",
  keywords: "",
  openGraph: {
    title: "Client Testimonials : Our Tech2globe Client Responses",
    description: "We are extremely proud of the response we have received from our clients for the quality and timely delivery of our work and our commitment to their success.",
    url: "https://www.tech2globe.com/testimonial",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials : Our Tech2globe Client Responses",
    description: "We are extremely proud of the response we have received from our clients for the quality and timely delivery of our work and our commitment to their success.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/testimonial",
  },
};

const pageHeaderData = {
  title: "Testimonials",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const renderStars = (rating) => {
  const stars = [];
  for (let x = 0; x < 5; x++) {
    if (Math.floor(rating) - x >= 1) {
      stars.push(<FaStar key={x} />);
    } else if (rating - x > 0) {
      stars.push(<FaStarHalfAlt key={x} />);
    } else {
      stars.push(<FaRegStar key={x} />);
    }
  }
  return stars;
};

// ── Server-side fetch ──────────────────────────────
async function getTestimonials() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/testimonials`,
      { cache: "no-store" } // ✅ always get fresh data
    );
    const json = await res.json();

    // ✅ Handle both { data: [] } and direct array response
    const list = Array.isArray(json) ? json : (json.data || []);

    // ✅ Handle status as integer (1) OR string ("active")
    return list.filter((t) => t.status === 1 || t.status === "active" || t.status === true);
  } catch (err) {
    console.error("Failed to fetch testimonials:", err);
    return [];
  }
}

export default async function Testimonial() {
  const reviews = await getTestimonials();

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Resources" pageName="Testimonial" />

      <section className="TestimonialSection pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-page-heading-2">
                <h2>Your input is important to us. Please provide your valuable feedback.</h2>
                <p>Here are some testimonials from our clients</p>
              </div>
            </div>
          </div>

          <div className="row">
            {reviews.length > 0 ? (
              reviews.map((row) => (
                <div key={row.id} className="col-md-4 mb-4">
                  <div className={Style.TestimonialCard}>
                    <p className="testimonial-text">{row.text}</p>
                    <p className="client-view text-right mt-2">
                      <span className="client-name fw-bold">{row.name}</span>
                      {row.companyName && (
                        <span className="text-muted"> — {row.companyName}</span>
                      )}
                    </p>
                    <div className="ratings text-warning fs-5 mt-2">
                      {renderStars(row.stars)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted py-4">No testimonials found.</p>
            )}
          </div>

          {/* ── Video Testimonials ── */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <iframe
                width="100%" height="350"
                src="https://www.youtube.com/embed/dIyTKuCd1cE"
                title="Sales Boost | Account Management"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <h5>Kapil Mehta (Soham Collections)</h5>
            </div>
            <div className="col-md-6 mb-4">
              <iframe
                width="100%" height="350"
                src="https://www.youtube.com/embed/5NhgYJmi8vA"
                title="Amazon Account Management - Day-to-Day operations"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <h5>Sajan Singal (Muradabad Arts)</h5>
            </div>
            <div className="col-md-6 mb-4">
              <iframe
                width="100%" height="350"
                src="https://www.youtube.com/embed/b1njt1DI7SQ"
                title="Amazon Reinstate of Seller Account"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <h5>Manish Kumar (MK Store)</h5>
            </div>
            <div className="col-md-6 mb-4">
              <iframe
                width="100%" height="350"
                src="https://www.youtube.com/embed/KROMIUnGsmI"
                title="Amazon Seller Account Setup with Cataloging"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <h5>Shaqib (Sprint CO Inco)</h5>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}