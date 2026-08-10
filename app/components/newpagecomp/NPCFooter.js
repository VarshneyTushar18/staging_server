"use client";

import Image from "next/image";
import Link from "next/link";

export default function NPCFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="npc-footer" aria-label="Page Footer">
      <div className="npc-container npc-footer__inner">
        <div className="npc-footer__brand">
          <Link href="/" className="npc-header__logo" aria-label="Tech2Globe Home">
            <Image
              src="/images/tech2globe-logo.png"
              alt="Tech2Globe Logo"
              width={840}
              height={244}
              className="npc-footer__logo-img"
            />
          </Link>
          <p className="npc-footer__tagline">
            The AI consulting team that ships working systems, not slide decks.
          </p>
          <div className="npc-footer__trust-badges">
            <span>🇦🇺 Australian Business</span>
            <span>🔒 Privacy Act Compliant</span>
            <span>⏰ AEST Business Hours</span>
          </div>
        </div>

        <nav className="npc-footer__nav" aria-label="Footer navigation">
          <div className="npc-footer__nav-col">
            <h3 className="npc-footer__nav-title">Services</h3>
            <ul>
              <li><a href="#services">AI Readiness Audit</a></li>
              <li><a href="#services">AI Strategy & Roadmap</a></li>
              <li><a href="#services">Generative AI & LLM</a></li>
              <li><a href="#services">Workflow Automation</a></li>
              <li><a href="#services">Customer Experience AI</a></li>
              <li><a href="#services">AI Governance</a></li>
            </ul>
          </div>
          <div className="npc-footer__nav-col">
            <h3 className="npc-footer__nav-title">Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#process">How We Work</a></li>
              <li><a href="#case-study">Case Studies</a></li>
              <li><a href="#testimonials">Client Stories</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="npc-footer__nav-col">
            <h3 className="npc-footer__nav-title">Contact</h3>
            <ul>
              <li>
                <a
                  href="mailto:info@tech2globe.com.au"
                  className="npc-footer__contact-link"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@tech2globe.com.au
                </a>
              </li>
              <li>
                <a
                  href="https://tech2globe.com.au"
                  className="npc-footer__contact-link"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  tech2globe.com.au
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="npc-footer__bottom">
        <div className="npc-container npc-footer__bottom-inner">
          <p>© {currentYear} Tech2Globe. All rights reserved.</p>
          <div className="npc-footer__legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookies-privacy-policy">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
