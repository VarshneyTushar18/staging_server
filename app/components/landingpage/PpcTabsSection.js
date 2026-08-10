"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaBullseye,
  FaChartLine,
  FaFire,
  FaMoneyBillWave,
} from "react-icons/fa";

const tabs = [
  {
    id: "scaling-spend",
    label: "Rising ACOS / TACOS",
    icon: FaFire,
    title: "Ad Spend Scaling",
    titleSuffix: "Faster Than Profit",
    description:
      "ACOS and TACOS climb as you scale — spend grows, but contribution margin does not.",
    image: "/images/landingpage/Hight-Acos1.webp",
    imageAlt: "Rising ACOS and TACOS",
    imageClass: "coloredbg",
  },
  {
    id: "growth-stall",
    label: "Growth Stalling",
    icon: FaChartLine,
    title: "Marketplace Growth",
    titleSuffix: "Stalling",
    description:
      "Your D2C brand is strong, but Amazon / Flipkart / Nykaa growth has plateaued.",
    image: "/images/landingpage/No-Growth.webp",
    imageAlt: "Marketplace growth stalling",
    imageClass: "",
  },
  {
    id: "fragmented-teams",
    label: "Fragmented Marketplaces",
    icon: FaBullseye,
    title: "No Single Team",
    titleSuffix: "Owning All Channels",
    description:
      "Amazon, Flipkart and Nykaa sit with different vendors — no one owns the full P&L.",
    image: "/images/landingpage/keyword.webp",
    imageAlt: "Fragmented marketplace ownership",
    imageClass: "",
  },
  {
    id: "buy-box",
    label: "Share & Price Erosion",
    icon: FaMoneyBillWave,
    title: "Losing Buy Box",
    titleSuffix: "& Market Share",
    description:
      "Competitors undercut pricing and erode share while reporting stays vanity-metric deep.",
    image: "/images/landingpage/Wasted-Ad-Spend1.webp",
    imageAlt: "Buy Box and price erosion",
    imageClass: "coloredbg",
  },
];

export default function PpcTabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="ppc-tabs-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="d2c_title text_start text-center position-relative">
              Why <span>Established Brands</span> Struggle on Marketplaces
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="tabs-header">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`tab${activeTab === index ? " active" : ""}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <Icon /> {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="tabs-content">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;

                return (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className={`tab-pane${activeTab === index ? " active" : ""}`}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6 text-center">
                        <h3>
                          <Icon /> <span>{tab.title}</span> {tab.titleSuffix}
                        </h3>
                        <h5>{tab.description}</h5>
                      </div>

                      <div className="col-lg-6">
                        <div
                          className={`image-blocktab${tab.imageClass ? ` ${tab.imageClass}` : ""}`}
                        >
                          <Image
                            src={tab.image}
                            alt={tab.imageAlt}
                            width={600}
                            height={400}
                            className="img-fluid rounded-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
