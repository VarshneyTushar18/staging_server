"use client";

import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "./AmazonQuoteFab.module.css";

export default function AmazonQuoteFab() {
  return (
    <Link
      href="/amazon-marketing-services/questionnaire"
      className={styles.quoteFab}
      aria-label="Get Amazon onboarding quote"
      title="Get a quote"
    >
      <FaQuoteLeft aria-hidden="true" />
    </Link>
  );
}
