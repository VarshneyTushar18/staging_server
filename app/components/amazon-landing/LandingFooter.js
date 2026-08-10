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
    <footer className="amz-footer">
      <div className="amz-container">
        <div className="amz-footer__inner">
          <Image
            src="/images/landingpage/footer_logo.png"
            alt="Tech2Globe"
            width={220}
            height={72}
            className="amz-footer__logo"
          />
          <p className="amz-footer__tagline">
            Tech2Globe manages Amazon Seller Central and Vendor Central for
            brands across Australia — from listing optimisation and PPC to FBA
            and compliance.
          </p>

          <div className="amz-footer__social">
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

          <div className="amz-footer__links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden>|</span>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>

        <div className="amz-footer__copy">
          <p>
            &copy; {new Date().getFullYear()} Tech2Globe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
