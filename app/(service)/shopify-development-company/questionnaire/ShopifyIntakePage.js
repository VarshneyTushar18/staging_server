"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ShopifyIntakeForm from "@/app/components/landingpage/ShopifyIntakeForm";
import styles from "./ShopifyIntakePage.module.css";

export default function ShopifyIntakePage() {
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
              <p className={styles.eyebrow}>Shopify Development</p>
              <h1>AI Store Builder Questionnaire</h1>
              <p className={styles.subtitle}>
                Tell us about your brand and products — we&apos;ll build your
                Shopify store plan.
              </p>
            </div>
          </div>

          <Link
            href="/shopify-development-company"
            className={styles.backBtn}
            aria-label="Back to Shopify Development page"
          >
            <FaArrowLeft aria-hidden="true" />
            <span className={styles.backLabel}>Back</span>
          </Link>
        </div>
      </header>

      <main className={styles.pageBody}>
        <div className={`container ${styles.formContainer}`}>
          <ShopifyIntakeForm inModal hideTitle />
        </div>
      </main>
    </div>
  );
}
