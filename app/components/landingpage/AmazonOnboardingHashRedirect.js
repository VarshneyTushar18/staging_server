"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AmazonOnboardingHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === "#amazon-onboarding-form") {
      router.replace("/amazon-marketing-services/questionnaire");
    }
  }, [router]);

  return null;
}
