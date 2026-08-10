"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ShopifyIntakeHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === "#shopify-intake-form") {
      router.replace("/shopify-development-company/questionnaire");
    }
  }, [router]);

  return null;
}
