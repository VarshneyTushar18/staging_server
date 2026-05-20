"use client";

import { useEffect } from "react";
import Image from "next/image";
import Style from "./portfolio.module.css";

export default function PortfolioTabs({
  data,
  title = "Our Portfolio",
  description = null,
}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="container pb-5">
      <h2 className="text-danger text-center mb-3">{title}</h2>
      {description && <p className="text-center">{description}</p>}

      {/* Tabs */}
      <ul className={`${Style.PorfolioTab} nav nav-tabs mb-4`}>
        {data?.map((tab, i) => (
          <li key={i}>
            <a
              href={`#tab${i}`}
              data-bs-toggle="tab"
              className={i === 0 ? "active" : ""}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {data?.map((tab, i) => (
          <div
            key={i}
            id={`tab${i}`}
            className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
          >
            {tab.subTabs && tab.subTabs.length > 0 ? (
              <SubTabGroup subTabs={tab.subTabs} parentIndex={i} />
            ) : (
              <PortfolioGrid items={tab.items || []} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SubTabGroup({ subTabs, parentIndex }) {
  return (
    <>
      <ul className={`${Style.PorfolioTab} nav nav-tabs mt-3 mb-5`}>
        {subTabs.map((sub, j) => (
          <li key={j}>
            <a
              href={`#sub${parentIndex}-${j}`}
              data-bs-toggle="tab"
              className={j === 0 ? "active" : ""}
            >
              {sub.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {subTabs.map((sub, j) => (
          <div
            key={j}
            id={`sub${parentIndex}-${j}`}
            className={`tab-pane fade ${j === 0 ? "show active" : ""}`}
          >
            <PortfolioGrid items={sub.items || []} />
          </div>
        ))}
      </div>
    </>
  );
}

function PortfolioGrid({ items }) {
  // ✅ Normalize LINK
  const getLink = (item) => {
    const rawLink =
      item.project_link ||
      item.link ||
      item.url ||
      item.redirect_url ||
      item?.attributes?.link ||
      "";

    if (!rawLink) return "";
    return rawLink.startsWith("http")
      ? rawLink
      : `https://${rawLink}`;
  };

  // ✅ Normalize IMAGE (FIXED ISSUE)
  const getImage = (item) => {
    let image =
      item.image_url || // API
      item.img ||       // Local
      "";

    if (!image) return "/images/placeholder.png";

    // Handle API relative path
    if (!image.startsWith("http") && image.startsWith("/uploads")) {
      return `${process.env.NEXT_PUBLIC_API_URL}${image}`;
    }

    return image;
  };

  return (
    <div className="row">
      {items?.map((item, k) => {
        const link = getLink(item);
        const image = getImage(item);

        return (
          <div
            key={k}
            className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
          >
            <div
              className={`${Style.PortfolioCard} PortfolioCard h-100 pb-0 d-flex flex-column`}
            >
              {/* IMAGE */}
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                </a>
              ) : (
                <Image
                  src={image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
              )}

              {/* TITLE */}
              <h3 className={Style.PortfolioTitle}>{item.title}</h3>

              {/* BUTTON */}
              <div className="text-right mt-auto">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Style.PortfolioLink}
                  >
                    View Project
                  </a>
                ) : (
                  <span
                    className={Style.PortfolioLink}
                    style={{
                      opacity: 0.6,
                      cursor: "not-allowed",
                      pointerEvents: "none",
                    }}
                  >
                    No Link Available
                  </span>
                )}
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}