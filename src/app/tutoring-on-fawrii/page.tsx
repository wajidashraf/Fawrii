import type { Metadata } from "next";
import { HeroSection } from "@/components/tutoring-on-fawrii/HeroSection";
import { DirectorVideoSection } from "@/components/tutoring-on-fawrii/DirectorVideoSection";
import { WhyTutorsChooseSection } from "@/components/tutoring-on-fawrii/WhyTutorsChooseSection";
import { HowYouWorkSection } from "@/components/tutoring-on-fawrii/HowYouWorkSection";
import { ProfessionalStandardsSection } from "@/components/tutoring-on-fawrii/ProfessionalStandardsSection";
import { InControlSection } from "@/components/tutoring-on-fawrii/InControlSection";
import { BuiltForProfessionalsSection } from "@/components/tutoring-on-fawrii/BuiltForProfessionalsSection";
import { TrustedBySection } from "@/components/tutoring-on-fawrii/TrustedBySection";
import { FinalCtaSection } from "@/components/tutoring-on-fawrii/FinalCtaSection";

export const metadata: Metadata = {
  title: "Tutor on Your Terms | Fawrii",
  description:
    "A tutor-first platform where you set your rates, choose how you teach, and work within clear professional standards.",
};

export default function TutoringOnFawriiPage() {
  return (
    <main>
      <HeroSection />
      <DirectorVideoSection />
      <WhyTutorsChooseSection />
      <HowYouWorkSection />
      <ProfessionalStandardsSection />
      <InControlSection />
      <BuiltForProfessionalsSection />
      <TrustedBySection />
      <FinalCtaSection />
    </main>
  );
}
