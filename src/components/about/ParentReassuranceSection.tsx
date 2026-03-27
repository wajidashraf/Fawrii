import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TickList } from "@/components/ui/TickList";
import { section6Content } from "@/content/about";

export function ParentReassuranceSection() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="Built on trust for everyone involved"
      className="py-10 md:py-16"
    >
      {/* Centred, narrow block per brief — visually lighter */}
      <div className="max-w-3xl md:max-w-4xl mx-auto text-center">
        <SectionHeading>{section6Content.headline}</SectionHeading>

        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-4">
          {section6Content.intro}
        </p>

        <p className="font-medium text-foreground mb-6">
          {section6Content.subHeading}
        </p>

        {/* Callout card for features — matches homepage card-box pattern */}
        <div className="rounded-xl bg-surface border border-border shadow-sm p-5 sm:p-6 text-left max-w-lg mx-auto mb-8">
          <TickList items={section6Content.features} />
        </div>

        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
          {section6Content.closing}
        </p>
      </div>

      {/* No CTA — intentional per brief */}
    </SectionWrapper>
  );
}
