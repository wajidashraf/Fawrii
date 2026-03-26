import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { IconBulletList } from "@/components/ui/IconBulletList";
import { StepBadge } from "@/components/ui/StepBadge";
import { step1Content } from "@/content/how-it-works";

export function Step1Section() {
  return (
    <SectionWrapper
      background="default"
      maxWidth="wide"
      ariaLabel="Step 1: Join and get approved"
    >
      <div className="flex items-center gap-3 mb-6">
        <StepBadge step={step1Content.stepNumber} />
        <span className="text-sm font-medium text-foreground-subtle">
          Step 1 of 4
        </span>
      </div>

      <SectionHeading>{step1Content.headline}</SectionHeading>

      <div className="max-w-3xl">
        {step1Content.intro.map((para) => (
          <p
            key={para}
            className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-4"
          >
            {para}
          </p>
        ))}

        <p className="text-foreground font-medium mt-8 mb-4">
          {step1Content.checklistIntro}
        </p>

        <IconBulletList items={step1Content.checklist} />

        <p className="text-foreground-muted text-base sm:text-lg mt-6 mb-8">
          {step1Content.closing}
        </p>

        <PrimaryButton href={step1Content.cta.href}>
          {step1Content.cta.label}
        </PrimaryButton>
      </div>
    </SectionWrapper>
  );
}
