"use client";

import AICHeader from "./AICHeader";
import AICHero from "./AICHero";
import AICAbout from "./AICAbout";
import AICServices from "./AICServices";
import AICProcess from "./AICProcess";
import AICWhyUs from "./AICWhyUs";
import AICCaseStudy from "./AICCaseStudy";
import AICPortfolio from "./AICPortfolio";
import AICTestimonials from "./AICTestimonials";
import AICFAQ from "./AICFAQ";
import AICContact from "./AICContact";
import AICFooter from "./AICFooter";
import AICStickyCTA from "./AICStickyCTA";

export default function AIConsultingAusPage() {
  return (
    <div className="aic-lp">
      <AICHeader />
      <main>
        <AICHero />
        <AICAbout />
        <AICServices />
        <AICProcess />
        <AICWhyUs />
        <AICCaseStudy />
        <AICPortfolio />
        <AICTestimonials />
        <AICFAQ />
        <AICContact />
      </main>
      <AICFooter />
      <AICStickyCTA />
    </div>
  );
}
