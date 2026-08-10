"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import AmazonOnboardingForm from "@/app/components/landingpage/AmazonOnboardingForm";
import styles from "./AmazonOnboardingPage.module.css";

export default function AmazonOnboardingPage() {
  return (
    <div className={styles.page}>
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
              <h1>Seller Onboarding Questionnaire</h1>
              <p className={styles.subtitle}>
                Account management, listing optimization &amp; PPC — tell us about
                your Amazon business.
              </p>
            </div>
          </div>

          <Link
            href="/amazon-marketing-services"
            className={styles.backBtn}
            aria-label="Back to Amazon Marketing Services page"
          >
            <FaArrowLeft aria-hidden="true" />
            <span className={styles.backLabel}>Back</span>
          </Link>
        </div>
      </header>

      <main className={styles.pageBody}>
        <div className={`container ${styles.formContainer}`}>
          <AmazonOnboardingForm inModal hideTitle />
        </div>
      </main>
    </div>
  );
}
