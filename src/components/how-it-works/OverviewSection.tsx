import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { StepBadge } from "@/components/ui/StepBadge";
import { overviewContent, journeyDiagramSteps } from "@/content/how-it-works";

export function OverviewSection() {
  return (
    <SectionWrapper
      id="tutor-journey"
      background="alt"
      maxWidth="wide"
      ariaLabel="Tutor journey overview"
    >
      <SectionHeading>{overviewContent.headline}</SectionHeading>

      <p className="text-foreground-muted text-lg mb-4">
        {overviewContent.intro}
      </p>

      <BulletList items={overviewContent.steps} className="space-y-3 mb-6" />

      <p className="text-foreground-muted text-lg mb-10">
        {overviewContent.closing}
      </p>

      {/* 4-Step Journey Diagram */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {journeyDiagramSteps.map((item, index) => (
          <div
            key={item.step}
            className="relative flex flex-col items-center text-center p-5 rounded-xl bg-surface border border-border"
          >
            <StepBadge step={item.step} />
            <p className="mt-3 text-sm font-medium text-foreground">
              {item.label}
            </p>
            {/* Connector line between steps */}
            {index < journeyDiagramSteps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border" />
            )}
          </div>
        ))}
      </div>

      <PrimaryButton href={overviewContent.cta.href}>
        {overviewContent.cta.label}
      </PrimaryButton>
    </SectionWrapper>
  );
}
