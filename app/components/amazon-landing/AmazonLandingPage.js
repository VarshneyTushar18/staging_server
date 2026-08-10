"use client";

import StickyNav from "./StickyNav";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import PortfolioSection from "./PortfolioSection";
import CaseStudySection from "./CaseStudySection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import FinalCTASection from "./FinalCTASection";
import LandingFooter from "./LandingFooter";
import StickyMobileCTA from "./StickyMobileCTA";

export default function AmazonLandingPage() {
  return (
    <div className="amz-lp">
      <StickyNav />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <CaseStudySection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <LandingFooter />
      <StickyMobileCTA />
    </div>
  );
}
