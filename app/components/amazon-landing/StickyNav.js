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
  { label: "Case Study", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
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
    <header className={`amz-header${scrolled ? " amz-header--scrolled" : ""}`}>
      <div className="amz-container amz-header__inner">
        <Link href="/" className="amz-header__logo" aria-label="Tech2Globe home">
          <Image
            src="/images/tech2globe-logo.png"
            alt="Tech2Globe"
            width={840}
            height={244}
            priority
          />
        </Link>

        <nav className="amz-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="amz-header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="amz-btn amz-btn-primary amz-header__cta">
          Book Free Audit
        </a>

        <button
          type="button"
          className="amz-hamburger"
          aria-expanded={open}
          aria-controls="amz-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        id="amz-mobile-nav"
        className={`amz-mobile-nav${open ? " amz-mobile-nav--open" : ""}`}
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
          className="amz-btn amz-btn-primary"
        >
          Book Free Audit
        </a>
      </div>
    </header>
  );
}
