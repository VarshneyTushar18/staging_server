"use client";

import { useEffect, useState } from "react";
import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/api/portfolio/tree";

const pageHeaderData = {
  title: "Portfolio",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true,
};

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    loadPortfolio();
  }, []);

  const loadPortfolio = async () => {
    try {
      const res = await fetch(API_URL, {
        cache: "no-store",
      });
      const data = await res.json();
      console.log("API RAW RESPONSE:", data);
      setPortfolio(data);
    } catch (err) {
      console.error("Portfolio load error", err);
    }
  };

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />

      <Breadcrumb parentName="Resources" pageName="Portfolio" />

      <section className={Style.PageContent}>
        <div className="container">
          <div className={Style.ContentDiv}>
            <h2>Our Portfolio</h2>

            <p>
              For its lifetime, Tech2Globe has delivered hundreds of
              cost-effective and high-quality software solutions.
            </p>
          </div>

          <div className="StoreCreationTabs MainPortfolioTabs">
            <PortfolioTabs
              data={portfolio}
              title="A showcase of our best work"
              description="These are the projects we are most passionate about"
            />
          </div>
        </div>
      </section>
    </>
  );
}
