import AmazonOnboardingPage from "./AmazonOnboardingPage";

export const metadata = {
  title: "Amazon Seller Onboarding Questionnaire | Tech2Globe",
  description:
    "Tell us about your Amazon business — account management, listing optimization, and PPC.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/amazon-marketing-services/questionnaire",
  },
};

export default function AmazonQuestionnairePage() {
  return <AmazonOnboardingPage />;
}
