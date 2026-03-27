import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { StepBadge } from "@/components/ui/StepBadge";
import { getIcon } from "@/components/icons";
import { step3Content } from "@/content/how-it-works";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function Step3Section() {
  return (
    <SectionWrapper
      id="teaching"
      background="default"
      maxWidth="wide"
      ariaLabel="Step 3: Teaching on Fawrii"
    >
      <div className="flex items-center gap-3 mb-6">
        <StepBadge step={step3Content.stepNumber} />
        <span className="text-sm font-medium text-foreground-subtle">
          Step 3 of 4
        </span>
      </div>

      <MotionDiv variants={fadeInUp} repeat>
        <SectionHeading>{step3Content.headline}</SectionHeading>
      </MotionDiv>

      <MotionDiv variants={fadeInUp} delay={0.1} repeat>
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-10 max-w-3xl">
          {step3Content.intro}
        </p>
      </MotionDiv>

      {/* Session type detail cards */}
      <MotionDiv variants={scaleIn} delay={0.15} repeat>
        <div className="space-y-6 mb-10">
        {step3Content.sessionTypes.map((session) => (
          <div
            key={session.title}
            className="rounded-xl border border-border bg-surface shadow-sm hover:shadow-md transition-shadow duration-200 p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center">
                {getIcon(session.icon, "h-6 w-6 text-primary")}
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {session.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  {session.description}
                </p>
                <BulletList items={session.bullets} className="space-y-2" />
              </div>
            </div>
          </div>
        ))}
        </div>
      </MotionDiv>

      <MotionDiv variants={fadeInUp} delay={0.2} repeat>
        <p className="text-foreground-muted text-base sm:text-lg mb-8">
        {step3Content.closing}
      </p>

        <PrimaryButton href={step3Content.cta.href}>
          {step3Content.cta.label}
        </PrimaryButton>
      </MotionDiv>
    </SectionWrapper>
  );
}
