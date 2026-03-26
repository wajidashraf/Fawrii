import type { Metadata } from "next";
import { HeroSection } from "@/components/about/HeroSection";
import { DirectorVideoSection } from "@/components/about/DirectorVideoSection";
import { WhyFawriiExistsSection } from "@/components/about/WhyFawriiExistsSection";
import { MissionValuesSection } from "@/components/about/MissionValuesSection";
import { WhosBehindSection } from "@/components/about/WhosBehindSection";
import { HowWeSeeTutorsSection } from "@/components/about/HowWeSeeTutorsSection";
import { LongTermVisionSection } from "@/components/about/LongTermVisionSection";
import { ParentReassuranceSection } from "@/components/about/ParentReassuranceSection";
import { FinalCtaSection } from "@/components/about/FinalCtaSection";

export const metadata: Metadata = {
  title: "About Fawrii",
  description:
    "Fawrii was created to give tutors a fairer, safer, and more professional way to work online.",
};

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <DirectorVideoSection />
      <WhyFawriiExistsSection />
      <MissionValuesSection />
      <WhosBehindSection />
      <HowWeSeeTutorsSection />
      <LongTermVisionSection />
      <ParentReassuranceSection />
      <FinalCtaSection />
    </main>
  );
}
