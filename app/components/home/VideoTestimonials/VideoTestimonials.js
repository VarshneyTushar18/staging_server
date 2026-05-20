"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./VideoTestimonials.module.css";

const videos = [
  {
    id: "vidreviewOne",
    title: "Strategic Account Management",
    src: "https://www.youtube-nocookie.com/embed/CDI-QIfFhqM",
    thumbnail: "/images/testimonials/strategic-account-management-video-testimonial.jpg",
    stats: [
      { value: "+105%", label: "Orders" },
      { value: "+213%", label: "Sales" },
    ],
  },
  {
    id: "vidreviewTwo",
    title: "Amazon Account Management",
    src: "https://www.youtube-nocookie.com/embed/C2EuZyYgLHs",
    thumbnail: "/images/testimonials/amazon-account-management-video-testimonial.jpg",
    stats: [
      { value: "+20%", label: "ROAS" },
      { value: "+105%", label: "Orders" },
    ],
  },
  {
    id: "vidreviewThree",
    title: "Amazon Marketing Consultancy",
    src: "https://www.youtube-nocookie.com/embed/R6NZXqNaUj0",
    thumbnail: "/images/testimonials/amazon-marketing-consultancy-video-testimonial.jpg",
    stats: [
      { value: "+70%", label: "Daily Sales" },
      { value: "35%", label: "Organic Orders" },
    ],
  },
  {
    id: "vidreviewFour",
    title: "Digital Marketing Services",
    src: "https://www.youtube-nocookie.com/embed/eHTCSN5jngI",
    thumbnail: "/images/testimonials/digital-marketing-services-video-testimonial.jpg",
    stats: [
      { value: "+315%", label: "Organic Traffic" },
      { value: "+100%", label: "Leads" },
    ],
  },
];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className={styles.videoTestimonialsSection}>
      {/* Modals */}
      {videos.map((video) => (
        <div
          className={`modal fade ${activeVideo === video.id ? "show d-block" : ""}`}
          id={video.id}
          key={video.id}
          tabIndex={-1}
          aria-hidden={activeVideo === video.id ? "false" : "true"}
          style={{ background: activeVideo === video.id ? "rgba(0,0,0,0.5)" : "transparent" }}
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <figure className="video-container m-0">
                  {activeVideo === video.id && (
                    <iframe
                      width="100%"
                      height="500px"
                      src={video.src}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  )}
                </figure>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Title Section */}
      <div className="container m-auto text-center">
        <div className="title-section text-center m-auto">
          <p className="sub-title text-uppercase">Trusted Feedback</p>
          <h2 className="title">Hear From Our Clients</h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={0}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className={`${styles.videoItem} card`}>
                <div className="card-img">
                  <a
                    role="button"
                    aria-label={`View video testimonial for ${video.title}`}
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <Image
                      className="img-fluid w-100"
                      src={video.thumbnail}
                      alt={`Client video testimonial for ${video.title}`}
                      width={400}
                      height={250}
                    />
                  </a>
                </div>
                <div className={styles.cardTitle}>
                  <h5>{`"${video.title}"`}</h5>
                </div>
                <div className="card-description text-center">
                  <div className={styles.stats}>
                    {video.stats.map((s, i) => (
                      <React.Fragment key={i}>
                        <div className={styles.stat}>
                          <p className={`${styles.statValue} text-danger`}>{s.value}</p>
                          <p className={styles.statLabel}>{s.label}</p>
                        </div>
                        {i !== video.stats.length - 1 && (
                          <div className={styles.divider}></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
