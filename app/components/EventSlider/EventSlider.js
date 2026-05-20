"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import FancyGallery from "../EventGallery/FancyGallery";
import "./custom.css";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function EventTabs() {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [years, setYears] = useState([]);
  const [activeYear, setActiveYear] = useState(null);
  const [galleryData, setGalleryData] = useState(null); // single row { banner, gallery[], description }
  const [openGallery, setOpenGallery] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ── Step 1: Fetch categories on mount ──
  useEffect(() => {
    fetch(`${BASE_URL}/api/life/categories`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then(({ data }) => {
        setCategories(data);
        if (data.length > 0) setActiveTab(data[0]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // ── Step 2: Fetch years when tab changes ──
  useEffect(() => {
    if (!activeTab) return;

    setYears([]);
    setActiveYear(null);
    setGalleryData(null);

    fetch(`${BASE_URL}/api/life/years/${activeTab.category}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch years");
        return res.json();
      })
      .then(({ data }) => {
        setYears(data);
        if (data.length > 0) setActiveYear(data[0]);
      })
      .catch((err) => setError(err.message));
  }, [activeTab]);

  // ── Step 3: Fetch gallery when year changes ──
  useEffect(() => {
    if (!activeTab || !activeYear) return;

    setGalleryData(null);

    fetch(`${BASE_URL}/api/life/gallery/${activeTab.category}/${activeYear}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch gallery");
        return res.json();
      })
      .then(({ data }) => {
        // data is an array — take first row which has banner + gallery[]
        setGalleryData(data[0] || null);
      })
      .catch((err) => setError(err.message));
  }, [activeTab, activeYear]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenGallery(false);
  };

  if (loading) return <p className="text-center py-5">Loading...</p>;
  if (error) return <p className="text-center text-danger py-5">{error}</p>;
  if (!categories.length)
    return <p className="text-center py-5">No data found.</p>;
  const cleanTitle = activeTab?.category
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      {/* ── Slider Tabs ── */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 6 },
          768: { slidesPerView: 7 },
          1024: { slidesPerView: 8 },
        }}
      >
        {categories.map((item) => (
          <SwiperSlide key={item.category}>
            <div
              className={`tabCard ${activeTab?.category === item.category ? "active" : ""}`}
              onClick={() => handleTabChange(item)}
            >
              <div className="imgWrapper">
                <Image
                  src={item.category_img}
                  alt={item.category_title}
                  width={57}
                  height={41}
                />
              </div>
              <p className="title">
                {item.category_title?.replace(/ Collection$/i, "")}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Tab Content ── */}
      <div className="contentBox pt-5">
        <h2>{activeTab?.category_title?.replace(/ Collection$/i, "")}</h2>
        {/* ── Year Buttons ── */}
        <div className="yearTabs pb-4">
          {years.length > 0 ? (
            years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`yearBtn ${activeYear === year ? "active" : ""}`}
              >
                {year}
              </button>
            ))
          ) : (
            <p className="text-muted">No years available.</p>
          )}
        </div>

        {/* ── Banner + Gallery ── */}
        <div className="row">
          <div className="col-md-6">
            {galleryData ? (
              <div className="bannerBlock">
                <Image
                  src={galleryData.banner}
                  alt={activeTab?.category_title}
                  width={628}
                  height={350}
                  className="rounded-4 object-fit-cover imgBanner"
                />
                <div className="bannerContentBlock">
                  <h4>{galleryData?.description}</h4>
                  <button
                    className="btn bg-danger"
                    disabled={!galleryData.gallery?.length}
                    onClick={() => {
                      if (galleryData.gallery?.length) setOpenGallery(true);
                    }}
                  >
                    Explore More
                  </button>
                  <FancyGallery
                    images={galleryData.gallery || []}
                    open={openGallery}
                    setOpen={setOpenGallery}
                  />
                </div>
              </div>
            ) : (
              <p className="text-muted">No content for this selection.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
