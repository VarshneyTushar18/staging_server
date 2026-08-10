"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NPCHeader({ navLinks }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`npc-header${scrolled ? " npc-header--scrolled" : ""}`}>
      <div className="npc-container npc-header__inner">
        <Link href="/" className="npc-header__logo" aria-label="Tech2Globe Home">
          <Image
            src="/images/tech2globe-logo.png"
            alt="Tech2Globe Logo"
            width={840}
            height={244}
            className="npc-header__logo-img"
            priority
          />
        </Link>

        <nav
          className={`npc-header__nav${menuOpen ? " npc-header__nav--open" : ""}`}
          aria-label="Page navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="npc-header__nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="npc-btn npc-btn--primary npc-header__cta"
          onClick={() => setMenuOpen(false)}
        >
          Free AI Audit
        </a>

        <button
          type="button"
          className={`npc-hamburger${menuOpen ? " npc-hamburger--active" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
