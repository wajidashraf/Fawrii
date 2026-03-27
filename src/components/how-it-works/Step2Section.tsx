import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { TextCta } from "@/components/ui/TextCta";
import { StepBadge } from "@/components/ui/StepBadge";
import { getIcon } from "@/components/icons";
import { step2Content } from "@/content/how-it-works";

export function Step2Section() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="Step 2: Set how you want to tutor"
    >
      <div className="flex items-center gap-3 mb-6">
        <StepBadge step={step2Content.stepNumber} />
        <span className="text-sm font-medium text-foreground-subtle">
          Step 2 of 4
        </span>
      </div>

      <SectionHeading>{step2Content.headline}</SectionHeading>

      <div className="max-w-3xl">
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-4">
          {step2Content.intro}
        </p>

        <p className="text-foreground font-medium mb-3">You choose:</p>
        <div className="rounded-xl bg-surface border border-border shadow-sm p-5 sm:p-6 mb-8">
          <BulletList items={step2Content.choices} />
        </div>

        <p className="text-foreground font-medium mb-4">
          {step2Content.sessionTypesIntro}
        </p>
      </div>

      {/* 3-column session type cards — equal weight per brief */}
      <div className="grid sm:grid-cols-3 gap-5 mb-8">
        {step2Content.sessionTypes.map((session) => (
          <div
            key={session.title}
            className="rounded-xl border border-border bg-surface shadow-sm hover:shadow-md transition-shadow duration-200 p-5 sm:p-6"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center mb-4">
              {getIcon(session.icon, "h-5 w-5 text-primary")}
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-2">
              {session.title}
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              {session.description}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl">
        <p className="text-foreground-muted text-base sm:text-lg mb-8">
          {step2Content.closing}
        </p>
        <TextCta href={step2Content.cta.href}>
          {step2Content.cta.label}
        </TextCta>
      </div>
    </SectionWrapper>
  );
}
