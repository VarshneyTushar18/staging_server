"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const SOCIAL = [
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/tech2globe.software",
    label: "Facebook",
  },
  { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com",
    label: "LinkedIn",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com",
    label: "Instagram",
  },
];

export default function AICFooter() {
  return (
    <footer className="aic-footer">
      <div className="aic-container">
        <div className="aic-footer__inner">
          <Image
            src="/images/landingpage/footer_logo.png"
            alt="Tech2Globe"
            width={220}
            height={72}
            className="aic-footer__logo"
          />
          <p className="aic-footer__tagline">
            Tech2Globe provides AI consulting for Australian businesses — AI
            readiness audits, strategy, LLM integration, workflow automation
            and AI governance delivered by a local team in AEST business hours.
          </p>

          <div className="aic-footer__social">
            {SOCIAL.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={13} />
              </a>
            ))}
          </div>

          <div className="aic-footer__links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden>|</span>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>

        <div className="aic-footer__copy">
          <p>
            &copy; {new Date().getFullYear()} Tech2Globe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
