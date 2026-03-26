import type { Metadata } from "next";
import { HeroSection } from "@/components/how-it-works/HeroSection";
import { OverviewSection } from "@/components/how-it-works/OverviewSection";
import { Step1Section } from "@/components/how-it-works/Step1Section";
import { Step2Section } from "@/components/how-it-works/Step2Section";
import { Step3Section } from "@/components/how-it-works/Step3Section";
import { Step4Section } from "@/components/how-it-works/Step4Section";
import { SafeguardingSection } from "@/components/how-it-works/SafeguardingSection";
import { TrustSection } from "@/components/how-it-works/TrustSection";
import { FinalCtaSection } from "@/components/how-it-works/FinalCtaSection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how tutoring works on Fawrii. A clear and flexible way to tutor online with full control over your rates and schedule.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <HeroSection />
      <OverviewSection />
      <Step1Section />
      <Step2Section />
      <Step3Section />
      <Step4Section />
      <SafeguardingSection />
      <TrustSection />
      <FinalCtaSection />
    </main>
  );
}
