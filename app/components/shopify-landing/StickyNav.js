"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function StickyNav() {
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
    <header className={`sp-header${scrolled ? " sp-header--scrolled" : ""}`}>
      <div className="sp-container sp-header__inner">
        <Link href="/" className="sp-header__logo" aria-label="Tech2Globe home">
          <Image
            src="/images/tech2globe-logo.png"
            alt="Tech2Globe"
            width={840}
            height={244}
            priority
          />
        </Link>

        <nav className="sp-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="sp-header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="sp-btn sp-btn-primary sp-header__cta">
          Contact Now
        </a>

        <button
          type="button"
          className="sp-hamburger"
          aria-expanded={open}
          aria-controls="shopify-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        id="shopify-mobile-nav"
        className={`sp-mobile-nav${open ? " sp-mobile-nav--open" : ""}`}
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
          className="sp-btn sp-btn-primary"
        >
          Contact Now
        </a>
      </div>
    </header>
  );
}
