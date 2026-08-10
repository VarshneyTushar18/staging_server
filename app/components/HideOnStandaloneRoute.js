"use client";

import { usePathname } from "next/navigation";

const STANDALONE_ROUTES = [
  "/amazon-ads",
  "/amazon-consulting-australia",
  "/ai-consulting-australia",
  "/shopify-agency-sydney",
  "/shopify-development-company/questionnaire",
];

function isStandaloneRoute(pathname) {
  return STANDALONE_ROUTES.some(
    (route) => pathname === route || pathname?.startsWith(`${route}/`),
  );
}

export default function HideOnStandaloneRoute({ children }) {
  const pathname = usePathname();

  if (isStandaloneRoute(pathname)) {
    return null;
  }

  return children;
}
