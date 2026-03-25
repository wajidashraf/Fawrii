import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { trustedByContent } from "@/content/homepage";

export function TrustedBySection() {
  return (
    <SectionWrapper
      id="trusted-by"
      background="default"
      maxWidth="wide"
      ariaLabel="Trusted by parents and schools"
      className="py-12 md:py-16"
    >
      <SectionHeading>{trustedByContent.headline}</SectionHeading>

      <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-2">
        {trustedByContent.intro}
      </p>
      <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
        {trustedByContent.subIntro}
      </p>

      <BulletList
        items={trustedByContent.bullets}
        variant="compact"
        className="mb-6"
      />

      <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
        {trustedByContent.closing}
      </p>

      {/* No CTA — intentional per brief */}
    </SectionWrapper>
  );
}
