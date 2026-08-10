"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FaQuoteLeft, FaTimes } from "react-icons/fa";
import AmazonOnboardingForm from "./AmazonOnboardingForm";
import styles from "./AmazonOnboardingPopup.module.css";

const HASH = "#amazon-onboarding-form";

export default function AmazonOnboardingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openPopup = useCallback(() => {
    setIsOpen(true);
    if (typeof window !== "undefined" && window.location.hash === HASH) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest(`a[href="${HASH}"]`);
      if (!anchor) return;
      event.preventDefault();
      openPopup();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [openPopup]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === HASH) {
      openPopup();
    }
  }, [openPopup]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") closePopup();
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closePopup]);

  const popup = isOpen ? (
    <div
      className={styles.fullPage}
      role="dialog"
      aria-modal="true"
      aria-labelledby="amazon-onboarding-title"
    >
      <header className={styles.pageHeader}>
        <div className={`container ${styles.headerInner}`}>
          <div className={styles.headerBrand}>
            <Image
              src="/images/tech2globe-logo.png"
              alt="Tech2Globe"
              width={140}
              height={40}
              className={styles.logo}
              priority
            />
            <div className={styles.headerText}>
              <p className={styles.eyebrow}>Amazon Marketing Services</p>
              <h1 id="amazon-onboarding-title">Seller Onboarding Questionnaire</h1>
              <p className={styles.subtitle}>
                Account management, listing optimization &amp; PPC — tell us about your Amazon business.
              </p>
            </div>
          </div>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={closePopup}
            aria-label="Close questionnaire"
          >
            <FaTimes aria-hidden="true" />
            <span className={styles.closeLabel}>Close</span>
          </button>
        </div>
      </header>

      <main className={styles.pageBody}>
        <div className={`container ${styles.formContainer}`}>
          <AmazonOnboardingForm inModal hideTitle />
        </div>
      </main>
    </div>
  ) : null;

  return (
    <>
      {!isOpen ? (
        <button
          type="button"
          className={styles.quoteFab}
          onClick={openPopup}
          aria-label="Get Amazon onboarding quote"
          title="Get a quote"
        >
          <FaQuoteLeft aria-hidden="true" />
        </button>
      ) : null}

      {mounted && popup ? createPortal(popup, document.body) : null}
    </>
  );
}
