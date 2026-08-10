import { Sora, Syne } from "next/font/google";
import AmazonAdsAnchorScroll from "../components/landingpage/AmazonAdsAnchorScroll";
import AmazonAdsScrollToTop from "../components/landingpage/AmazonAdsScrollToTop";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

export default function AmazonAdsLayout({ children }) {
  return (
    <div className={`amazon-ads-page ${syne.variable} ${sora.variable}`}>
      <AmazonAdsAnchorScroll />
      <AmazonAdsScrollToTop />
      {children}
    </div>
  );
}
