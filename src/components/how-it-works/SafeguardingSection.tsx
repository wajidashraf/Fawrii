import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { safeguardingContent } from "@/content/how-it-works";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function SafeguardingSection() {
  return (
    <SectionWrapper
      background="default"
      maxWidth="wide"
      ariaLabel="Support, safeguarding and standards"
    >
      <div className="max-w-3xl">
        <MotionDiv variants={fadeInUp} repeat>
          <SectionHeading>{safeguardingContent.headline}</SectionHeading>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.1} repeat>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-2">
            {safeguardingContent.intro}
          </p>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
            {safeguardingContent.subIntro}
          </p>
        </MotionDiv>

        <MotionDiv variants={scaleIn} delay={0.15} repeat>
          <div className="rounded-xl bg-background-alt border border-border shadow-sm p-5 sm:p-6 mb-8">
            <BulletList items={safeguardingContent.bullets} />
          </div>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.2} repeat>
          <div className="space-y-2 mb-8">
          {safeguardingContent.closing.map((line) => (
            <p
              key={line}
              className="text-foreground-muted text-base sm:text-lg leading-relaxed"
            >
              {line}
            </p>
          ))}
          </div>

          <PrimaryButton href={safeguardingContent.cta.href}>
            {safeguardingContent.cta.label}
          </PrimaryButton>
        </MotionDiv>
      </div>
    </SectionWrapper>
  );
}
