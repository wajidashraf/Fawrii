import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TextCta } from "@/components/ui/TextCta";
import { StepBadge } from "@/components/ui/StepBadge";
import { getIcon } from "@/components/icons";
import { step4Content } from "@/content/how-it-works";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function Step4Section() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="Step 4: Your rates and earnings"
    >
      <div className="flex items-center gap-3 mb-6">
        <StepBadge step={step4Content.stepNumber} />
        <span className="text-sm font-medium text-foreground-subtle">
          Step 4 of 4
        </span>
      </div>

      <MotionDiv variants={fadeInUp} repeat>
        <SectionHeading>{step4Content.headline}</SectionHeading>
      </MotionDiv>

      <MotionDiv variants={fadeInUp} delay={0.1} repeat>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left — copy */}
        <div>
          <p className="text-foreground text-lg font-medium mb-2">
            {step4Content.intro}
          </p>
          <p className="text-foreground-muted text-base sm:text-lg mb-6">
            {step4Content.earningsIntro}
          </p>
          <div className="space-y-3 mb-8">
            {step4Content.details.map((detail) => (
              <p key={detail} className="text-foreground-muted leading-relaxed">
                {detail}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton href={step4Content.cta.href}>
              {step4Content.cta.label}
            </PrimaryButton>
            <TextCta href={step4Content.microCta.href}>
              {step4Content.microCta.label}
            </TextCta>
          </div>
        </div>

        {/* Right — earning type cards */}
        <div className="space-y-4">
          {step4Content.earningTypes.map((earning) => (
            <div
              key={earning.title}
              className="rounded-xl border border-border bg-surface shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex items-start gap-4"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
                {getIcon(earning.icon, "h-5 w-5 text-primary")}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {earning.title}
                  </h3>
                  {earning.badge && (
                    <span className="text-xs font-medium bg-primary text-white px-2 py-0.5 rounded">
                      {earning.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-primary mb-1">
                  {earning.label}
                </p>
                <p className="text-sm text-foreground-muted">
                  {earning.description}
                </p>
              </div>
            </div>
          ))}
          <p className="text-xs text-foreground-subtle pt-2">
            Payments and pay-outs are managed in-platform, with clear
            cancellation and no-show rules.
          </p>
        </div>
        </div>
      </MotionDiv>
    </SectionWrapper>
  );
}
