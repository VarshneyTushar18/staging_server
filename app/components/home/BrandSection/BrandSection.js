"use client";

import Image from "next/image";
import Style from "./BrandSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

export default function BrandSection() {
  const data = [
    {
      img: "/images/homepage/stats-clutch.png",
      alt: "Tech2Globe Clutch Reviews",
      rating: 5.0,
      reviews: "45+ Reviews",
      full: 5,
      empty: 0,
      style: Style.subStarContainer1,
    },
    {
      img: "/images/homepage/stats-google.png",
      alt: "Tech2Globe Google Reviews",
      rating: 4.0,
      reviews: "395+ Reviews",
      full: 4,
      empty: 1,
      style: Style.subStarContainer2,
    },
    {
      img: "/images/homepage/stats-trustpilot.png",
      alt: "Tech2Globe Trustpilot Reviews",
      rating: 4.2,
      reviews: "5+ Reviews",
      full: 4,
      empty: 1,
      style: Style.subStarContainer3,
    },
    {
      img: "/images/homepage/stats-designrush.png",
      alt: "Tech2Globe DesignRush Reviews",
      rating: 4.9,
      reviews: "20+ Reviews",
      full: 5,
      empty: 0,
      style: Style.subStarContainer4,
    },
    {
      img: "/images/homepage/stats-goodfirm.png",
      alt: "Tech2Globe GoodFirms Reviews",
      rating: 5.0,
      reviews: "30+ Reviews",
      full: 5,
      empty: 0,
      style: Style.subStarContainer5,
    },
  ];

  return (
    <section className="container">
      <div className={`row d-flex justify-content-center mb-2 ${Style.BrandBox}`}>
        {data.map((item, index) => (
          <div key={index} className="col-6 col-md-3 col-lg-2 py-3 py-md-0">
            <div className={Style.ratingContent}>
              <div className={Style.imgContainer}>
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={175}
                  height={60}
                  className="img-fluid"
                />
              </div>
              <div className={Style.starContainer}>
                <div className={`${Style.subStarContainer} ${item.style}`}>
                  <span className={Style.reviewNum}>{item.rating}</span>
                  {[...Array(item.full)].map((_, i) => (
                    <FontAwesomeIcon key={`f-${i}`} icon={faSolidStar} />
                  ))}
                  {[...Array(item.empty)].map((_, i) => (
                    <FontAwesomeIcon key={`e-${i}`} icon={faRegularStar} />
                  ))}
                </div>
                <div className={Style.reviewCounter}>
                  <p>{item.reviews}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
