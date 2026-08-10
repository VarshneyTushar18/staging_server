"use client";

import { useEffect } from "react";

const HASH_ALIASES = {
  contact: "home",
};

function getTargetId(hash) {
  const id = hash.replace(/^#/, "");
  return HASH_ALIASES[id] || id;
}

function scrollToSection(hash) {
  const targetId = getTargetId(hash);
  const target = document.getElementById(targetId);
  if (!target) return false;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", hash.startsWith("#") ? hash : `#${hash}`);
  return true;
}

function closeMobileNav() {
  const mobileNav = document.getElementById("navbarSupportedContent");
  if (mobileNav?.classList.contains("show")) {
    mobileNav.classList.remove("show");
  }
}

function isInPageAnchor(anchor) {
  if (!anchor || anchor.hasAttribute("data-bs-toggle")) return false;

  const href = anchor.getAttribute("href");
  if (!href || !href.startsWith("#") || href === "#") return false;

  return Boolean(document.getElementById(getTargetId(href)));
}

export default function AmazonAdsAnchorScroll() {
  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest("a[href^='#']");
      if (!isInPageAnchor(anchor)) return;

      event.preventDefault();
      closeMobileNav();
      scrollToSection(anchor.getAttribute("href"));
    };

    document.addEventListener("click", handleClick);

    const initialHash = window.location.hash;
    if (initialHash && document.getElementById(getTargetId(initialHash))) {
      requestAnimationFrame(() => scrollToSection(initialHash));
    }

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
