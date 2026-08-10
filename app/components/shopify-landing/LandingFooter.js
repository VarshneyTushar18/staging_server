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
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram" },
];

export default function LandingFooter() {
  return (
    <footer className="sp-footer">
      <div className="sp-container">
        <div className="sp-footer__inner">
          <Image
            src="/images/landingpage/footer_logo.png"
            alt="Tech2Globe"
            width={220}
            height={72}
            className="sp-footer__logo"
          />
          <p className="sp-footer__tagline">
            Tech2Globe designs, builds and scales Shopify and Shopify Plus
            stores for growing brands — from custom themes to ongoing CRO
            support.
          </p>

          <div className="sp-footer__social">
            {SOCIAL.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <div className="sp-footer__links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden>|</span>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>

        <div className="sp-footer__copy">
          <p>© {new Date().getFullYear()} Tech2Globe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
