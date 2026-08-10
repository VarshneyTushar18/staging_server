"use client";

import NPCHeader from "./NPCHeader";
import NPCHero from "./NPCHero";
import NPCAbout from "./NPCAbout";
import NPCServices from "./NPCServices";
import NPCProcess from "./NPCProcess";
import NPCWhyUs from "./NPCWhyUs";
import NPCCaseStudy from "./NPCCaseStudy";
import NPCPortfolio from "./NPCPortfolio";
import NPCTestimonials from "./NPCTestimonials";
import NPCFAQ from "./NPCFAQ";
import NPCContact from "./NPCContact";
import NPCFooter from "./NPCFooter";

export default function NewPageCompPage({
  navLinks,
  heroStats,
  about,
  aboutCards,
  services,
  processSteps,
  whyUs,
  caseStudy,
  portfolio,
  testimonials,
  faqs,
  contact,
}) {
  return (
    <div className="npc-lp">
      <NPCHeader navLinks={navLinks} />
      <main>
        <NPCHero stats={heroStats} />
        <NPCAbout about={about} cards={aboutCards} />
        <NPCServices services={services} />
        <NPCProcess steps={processSteps} />
        <NPCWhyUs reasons={whyUs} />
        <NPCCaseStudy caseStudy={caseStudy} />
        <NPCPortfolio items={portfolio} />
        <NPCTestimonials testimonials={testimonials} />
        <NPCFAQ faqs={faqs} />
        <NPCContact contact={contact} />
      </main>
      <NPCFooter />
    </div>
  );
}
