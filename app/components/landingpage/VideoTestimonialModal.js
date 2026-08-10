"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const DEFAULT_VIDEO_SRC =
  "https://www.youtube-nocookie.com/embed/CDI-QIfFhqM";

export default function VideoTestimonialModal({
  trigger,
  videoSrc = DEFAULT_VIDEO_SRC,
  iframeTitle = "Tech2Globe Boosts Amazon ROI with Strategic Account Management",
  ariaLabel = "View video testimonial for Strategic Account Management service",
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const modal =
    open && mounted ? (
      <div
        className="modal fade iframevidcontainer show"
        role="dialog"
        aria-modal="true"
        aria-labelledby="vidreviewOneLabel"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      >
        <div
          className="modal-dialog modal-sm"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="modal-body">
              <figure className="video-container m-0">
                <iframe
                  width="100%"
                  height="500"
                  src={videoSrc}
                  title={iframeTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                  aria-label={`YouTube video: ${iframeTitle}`}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <button
        type="button"
        className="video-testimonial-trigger"
        onClick={() => setOpen(true)}
        aria-label={ariaLabel}
      >
        {trigger}
      </button>

      {modal ? createPortal(modal, document.body) : null}
    </>
  );
}
