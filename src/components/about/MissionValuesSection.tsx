import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { section2Content } from "@/content/about";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function MissionValuesSection() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="Our mission and values"
    >
      <MotionDiv variants={fadeInUp} repeat>
        <SectionHeading>{section2Content.headline}</SectionHeading>
      </MotionDiv>

      <div className="max-w-3xl">
        <MotionDiv variants={fadeInUp} delay={0.1} repeat>
          <div className="space-y-3 mb-8">
            {section2Content.intro.map((p) => (
              <p
                key={p}
                className="text-foreground-muted text-base sm:text-lg leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          <h3 className="font-semibold text-foreground mb-4">
            {section2Content.subHeading}
          </h3>
        </MotionDiv>

        {/* Callout card for values — matches homepage card-box pattern */}
        <MotionDiv variants={scaleIn} delay={0.15} repeat>
          <div className="rounded-xl bg-surface border border-border shadow-sm p-5 sm:p-6 mb-8">
            <BulletList items={section2Content.bullets} />
          </div>
        </MotionDiv>

        {/* Closing — emphasized takeaway */}
        <MotionDiv variants={fadeInUp} delay={0.2} repeat>
          <p className="text-foreground font-semibold text-base sm:text-[17px] mb-3">
            {section2Content.closing[0]}
          </p>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-8">
            {section2Content.closing[1]}
          </p>

          <PrimaryButton href={section2Content.cta.href}>
            {section2Content.cta.label}
          </PrimaryButton>
        </MotionDiv>
      </div>
    </SectionWrapper>
  );
}
