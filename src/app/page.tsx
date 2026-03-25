import { HeroSection } from "@/components/home/HeroSection";
import { DirectorVideoSection } from "@/components/home/DirectorVideoSection";
import { WhyFawriiSection } from "@/components/home/WhyFawriiSection";
import { HowTutorsWorkSection } from "@/components/home/HowTutorsWorkSection";
import { PayControlSection } from "@/components/home/PayControlSection";
import { TrustSafeguardingSection } from "@/components/home/TrustSafeguardingSection";
import { WhoFawriiIsForSection } from "@/components/home/WhoFawriiIsForSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DirectorVideoSection />
      <WhyFawriiSection />
      <HowTutorsWorkSection />
      <PayControlSection />
      <TrustSafeguardingSection />
      <WhoFawriiIsForSection />
      <TrustedBySection />
      <FinalCtaSection />
    </main>
  );
}
