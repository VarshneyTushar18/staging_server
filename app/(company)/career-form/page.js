import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import "./custom.css";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import MultiStepSignup from "@/app/components/careerformstep/careerform";
import { Suspense } from "react";

export const metadata = {
  title: "Career - Online Marketing & IT Consulting Career - Tech2Globe",
  description:
    "Explore rewarding careers in online marketing and IT consulting with Tech2Globe. Join our dynamic team and shape the future of digital innovation.",
  alternates: {
    canonical: "https://www.tech2globe.com/career",
  },
  openGraph: {
    title: "Career - Online Marketing & IT Consulting Career - Tech2Globe",
    description:
      "Explore rewarding careers in online marketing and IT consulting with Tech2Globe.",
    url: "https://www.tech2globe.com/career",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career - Online Marketing & IT Consulting Career - Tech2Globe",
    description:
      "Explore rewarding careers in online marketing and IT consulting with Tech2Globe.",
  },
};

const pageHeaderData = {
  title: "Apply Job At Tech2Globe",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true,
};

export default function CareerForm() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />

      <Breadcrumb parentName="About Us" pageName="Career Form" />

      <BrandSection />

      <section className={Style.PageContent}>
        <Suspense fallback={<div>Loading...</div>}>
          <MultiStepSignup />
        </Suspense>
      </section>
    </>
  );
}
