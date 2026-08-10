"use client";

import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import VideoTestimonialModal from "./VideoTestimonialModal";

const videoTestimonials = [
  {
    title: "Strategic Account Management",
    videoSrc: "https://www.youtube-nocookie.com/embed/CDI-QIfFhqM",
    thumbnail: "/images/landingpage/strategic-account-management-video-testimonial.webp",
    stats: [
      { value: "+105%", label: "Orders" },
      { value: "+213%", label: "Sales" },
    ],
  },
  {
    title: "Amazon Account Management",
    videoSrc: "https://www.youtube-nocookie.com/embed/C2EuZyYgLHs",
    thumbnail: "/images/testimonials/amazon-account-management-video-testimonial.jpg",
    stats: [
      { value: "+20%", label: "ROAS" },
      { value: "+105%", label: "Orders" },
    ],
  },
  {
    title: "Amazon Marketing Consultancy",
    videoSrc: "https://www.youtube-nocookie.com/embed/R6NZXqNaUj0",
    thumbnail: "/images/testimonials/amazon-marketing-consultancy-video-testimonial.jpg",
    stats: [
      { value: "+70%", label: "Daily Sales" },
      { value: "35%", label: "Organic Orders" },
    ],
  },
  {
    title: "Digital Marketing Services",
    videoSrc: "https://www.youtube-nocookie.com/embed/eHTCSN5jngI",
    thumbnail: "/images/landingpage/digital-marketing-services-video-testimonial.webp",
    stats: [
      { value: "+315%", label: "Organic Traffic" },
      { value: "+100%", label: "Leads" },
    ],
  },
];

export default function VideoTestimonialSlider() {
  return (
    <div className="video-item">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        speed={800}
        className="video-testimonial-swiper"
      >
        {videoTestimonials.map((video) => (
          <SwiperSlide key={video.title}>
            <div className="card h-100">
              <div className="card-img">
                <VideoTestimonialModal
                  videoSrc={video.videoSrc}
                  iframeTitle={`Tech2Globe ${video.title}`}
                  ariaLabel={`View video testimonial for ${video.title} service`}
                  trigger={
                    <img
                      className="img-fluid w-100"
                      loading="lazy"
                      src={video.thumbnail}
                      alt={`Client video testimonial for ${video.title} service`}
                    />
                  }
                />
              </div>
              <div className="card-title">
                <h5>&quot;{video.title}&quot;</h5>
              </div>
              <div className="card-description text-center">
                <div className="stats">
                  {video.stats.map((stat, index) => (
                    <Fragment key={stat.label}>
                      {index > 0 ? <div className="divider" /> : null}
                      <div className="stat">
                        <p className="stat-value text-danger">{stat.value}</p>
                        <p className="stat-label">{stat.label}</p>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
