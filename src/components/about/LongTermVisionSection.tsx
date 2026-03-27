import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { section5Content } from "@/content/about";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function LongTermVisionSection() {
  return (
    <SectionWrapper
      background="default"
      maxWidth="wide"
      ariaLabel="Built with long-term responsibility in mind"
    >
      <MotionDiv variants={fadeInUp}>
      <SectionHeading>{section5Content.headline}</SectionHeading>
      </MotionDiv>

      <div className="max-w-3xl">
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
          {section5Content.intro}
        </p>

        <h3 className="font-semibold text-foreground mb-4">
          {section5Content.subHeading}
        </h3>

        {/* Callout card for focus areas — matches homepage card-box pattern */}
        <div className="rounded-xl bg-background-alt border border-border shadow-sm p-5 sm:p-6 mb-8">
          <BulletList items={section5Content.bullets} />
        </div>

        {/* Closing — emphasized takeaway */}
        <p className="text-foreground font-semibold text-base sm:text-[17px] mb-3">
          {section5Content.closing[0]}
        </p>
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-8">
          {section5Content.closing[1]}
        </p>

        <PrimaryButton href={section5Content.cta.href}>
          {section5Content.cta.label}
        </PrimaryButton>
      </div>
    </SectionWrapper>
  );
}
