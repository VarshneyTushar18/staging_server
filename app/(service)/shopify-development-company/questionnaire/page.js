import ShopifyIntakePage from "./ShopifyIntakePage";

export const metadata = {
  title: "Shopify AI Store Builder Questionnaire | Tech2Globe",
  description:
    "Tell us about your brand and products — Tech2Globe will build your Shopify store plan.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/shopify-development-company/questionnaire",
  },
};

export default function ShopifyQuestionnairePage() {
  return <ShopifyIntakePage />;
}
