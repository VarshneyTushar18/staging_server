"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);

    // Fallback: show after 1200ms to avoid stuck opacity:0
    const fallback = window.setTimeout(() => {
      if (!el.classList.contains("is-visible")) {
        el.classList.add("is-visible");
      }
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const delayClass =
    delay === 1
      ? "amz-reveal-delay-1"
      : delay === 2
        ? "amz-reveal-delay-2"
        : delay === 3
          ? "amz-reveal-delay-3"
          : delay === 4
            ? "amz-reveal-delay-4"
            : "";

  return (
    <Tag ref={ref} className={`amz-reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
