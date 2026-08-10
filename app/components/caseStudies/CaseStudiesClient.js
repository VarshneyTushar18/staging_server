"use client";

import { useEffect, useState } from "react";
import CaseStudiesTabs from "@/app/components/cstabs/cstabs";

export default function CaseStudiesClient() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl =
      process.env.NEXT_PUBLIC_CASE_STUDIES_API_URL ||
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/case-studies`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data || []);
      })
      .catch((err) => console.error("API error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading case studies...</p>;
  if (data.length === 0) return <p className="text-center">No case studies found.</p>;

  return <CaseStudiesTabs data={data} />;
}
