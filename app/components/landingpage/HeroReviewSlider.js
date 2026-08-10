"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const heroReviews = [
  {
    review:
      "Tech2Globe created an effective landing page and a successful Google Ads campaign. The team is dedicated and particularly impressive with their listening skills and technical expertise.",
    name: "Raphael Colon-Vonarx",
    role: "Clutch",
    initials: "RC",
    color: "#4dabf7",
  },
  {
    review:
      "The client is delighted with Tech2Globe work. The team is responsive and their output is of high quality. They listen to needs and bring great ideas to the table.",
    name: "Richard Planca",
    role: "Clutch",
    initials: "RP",
    color: "#51cf66",
  },
  {
    review:
      "Hardworking team with the main target of growing your business. The team is warm and instantly available for all confusions and help in establishing your Amazon business.",
    name: "Shubhesh Goel",
    role: "Google",
    initials: "SG",
    color: "#f59f00",
  },
  {
    review:
      "We commend your quick actions to our requests. It is almost more than 6 months we are engaged with Tech2Globe and from the first week we have been receiving numerous compliments on our website.",
    name: "Bobby",
    role: "Google",
    initials: "B",
    color: "#845ef7",
  },
  
];

export default function HeroReviewSlider() {
  return (
    <div className="review-wrapper mt-3">
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
        className="hero-review-swiper"
      >
        {heroReviews.map((item) => (
          <SwiperSlide key={item.name}>
            <div className="d2c_card_wrapper">
              <img
                src="/images/landingpage/Stars.webp"
                alt="reviews"
                className="starimg"
              />
              <h5>{item.review}</h5>
              <div className="detail">
                <div
                  className="profile-avatar"
                  style={{ backgroundColor: item.color }}
                >
                  {item.initials}
                </div>
                <div className="name-block">
                  <h3 className="mb-0">{item.name}</h3>
                  <p className="mb-0">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
