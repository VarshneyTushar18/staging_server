"use client";

import { useEffect } from "react";
import { fixRelativeLinks } from "./fixRelativeLinks";

export default function FixLinksWrapper({ children }) {
  useEffect(() => {
    fixRelativeLinks();
  }, []);

  return children;
}