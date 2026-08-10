import IndustriesServe from "./components/home/IndustriesServe/IndustriesServe";
import GlobalPresence from "./components/home/GlobalPresence/GlobalPresence";
import OurBlogs from "./components/home/OurBlogs/OurBlogs";
import CtaSection from "./components/home/CtaSection/CtaSection";
import BrandSection from "./components/home/BrandSection/BrandSection";
import BannerSection from "./components/home/BannerSection/BannerSection";

import OurServices from "./components/home/OurServices/OurServices";
import CaseStudies from "./components/home/CaseStudies/CaseStudies";
import VideoTestimonials from "./components/home/VideoTestimonials/VideoTestimonials";
import AboutSection from "./components/home/AboutSection/AboutSection";
import CeoDesk from "./components/home/CeoDesk/CeoDesk";
import FunFact from "./components/home/FunFact/FunFact";
import OurTestimonials from "./components/home/OurTestimonials/OurTestimonials";
import PortfolioSection from "./components/home/Portfolios/Portfolios";
import ContactSection from "./components/home/ContactSection/ContactSection";
import Footer from "./ui/Footer/Footer";
import ClientSection from "./components/home/ClientSection/ClientSection";
import Header from "./ui/Header/Header";

export const metadata = {
  title: "Tech2Globe: AI-Powered Ecommerce, IT Consulting & Digital Marketing Services",
  description:
    "Tech2Globe delivers AI-powered solutions for ecommerce growth, IT consulting, BPO/KPO, data analytics, and digital marketing. Partner with us to automate, scale, and future-proof your business with intelligent technology.",
  keywords:
    "Software Development Company India, enterprise portal development, content management system, data management services, data processing services, catalog management services, complete marketplace management service, data entry services, data mining services, data conversion services, Indexing Services, data analytics services, photo editing services, Post Processing of Real Estate Images and photos, photo manipulation services, Image Clipping Services, Photo Enhancement Services, ecommerce solutions, oscommerce ecommerce, SEO Services and Packages. Nopcommerce and magento website development.",

  openGraph: {
    title: "Tech2Globe: AI-Powered Ecommerce, IT Consulting & Digital Marketing Services",
    description:
      "Tech2Globe delivers AI-powered solutions for ecommerce growth, IT consulting, BPO/KPO, data analytics, and digital marketing. Partner with us to automate, scale, and future-proof your business with intelligent technology.",
    url: "https://www.tech2globe.com/",
    siteName: "Tech2Globe web Solutions LLP",
    images: [
      {
        url: "https://tech2globe.com/images/tech2globe.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Tech2Globe: AI-Powered Ecommerce, IT Consulting & Digital Marketing Services",
    description:
      "Tech2Globe delivers AI-powered solutions for ecommerce growth, IT consulting, BPO/KPO, data analytics, and digital marketing. Partner with us to automate, scale, and future-proof your business with intelligent technology.",
    images: ["https://tech2globe.com/images/tech2globe.jpg"],
  },

  alternates: {
    canonical: "https://www.tech2globe.com",
  },
};

export default function Home() {
  return (
    <div className="">
      <BannerSection />
      <BrandSection />
      <AboutSection />
      <CeoDesk />
      <FunFact />
      <OurServices />
      <CtaSection />
      <IndustriesServe />
      <OurTestimonials />
      <ClientSection />
      <VideoTestimonials />
      <CaseStudies />
      <ContactSection />
      <PortfolioSection />
      <OurBlogs />
    </div>
  );
}
