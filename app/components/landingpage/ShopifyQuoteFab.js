"use client";

import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "./ShopifyQuoteFab.module.css";

export default function ShopifyQuoteFab() {
  return (
    <Link
      href="/shopify-development-company/questionnaire"
      className={styles.quoteFab}
      aria-label="Get a Shopify quote"
      title="Get a quote"
    >
      <FaQuoteLeft aria-hidden="true" />
    </Link>
  );
}
