"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Case Study", href: "#case-study" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function AICHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`aic-header${scrolled ? " aic-header--scrolled" : ""}`}>
      <div className="aic-container aic-header__inner">
        <Link href="/" className="aic-header__logo" aria-label="Tech2Globe home">
          <Image
            src="/images/tech2globe-logo.png"
            alt="Tech2Globe"
            width={840}
            height={244}
            priority
          />
        </Link>

        <nav className="aic-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="aic-header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="aic-btn aic-btn-primary aic-header__cta"
        >
          Free AI Audit
        </a>

        <button
          type="button"
          className="aic-hamburger"
          aria-expanded={open}
          aria-controls="aic-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        id="aic-mobile-nav"
        className={`aic-mobile-nav${open ? " aic-mobile-nav--open" : ""}`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="aic-btn aic-btn-primary"
        >
          Free AI Audit
        </a>
      </div>
    </header>
  );
}
