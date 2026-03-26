import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { section4Content } from "@/content/tutoring-on-fawrii";

export function InControlSection() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="You're in control from the start"
    >
      <div className="max-w-3xl">
        <SectionHeading>{section4Content.headline}</SectionHeading>

        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
          {section4Content.intro}
        </p>

        <h3 className="font-semibold text-foreground mb-4">
          {section4Content.applyingMeans}
        </h3>

        <BulletList items={section4Content.bullets} className="space-y-3 mb-8" />

        {/* Mini-timeline: Apply → Review → Onboard — soft-edged panel per brief */}
        <div className="rounded-xl bg-surface border border-border p-5 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
            {section4Content.timeline.map((item, idx) => (
              <div key={item.step} className="flex items-center flex-1">
                <div className="flex-1 text-center">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                    {idx + 1}
                  </span>
                  <p className="font-semibold text-foreground text-sm">
                    {item.step}
                  </p>
                  <p className="text-xs text-foreground-muted mt-0.5">
                    {item.label}
                  </p>
                </div>
                {idx < section4Content.timeline.length - 1 && (
                  <div className="hidden sm:block w-8 h-px bg-border flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-8">
          {section4Content.closing}
        </p>

        <PrimaryButton href={section4Content.cta.href}>
          {section4Content.cta.label}
        </PrimaryButton>
      </div>
    </SectionWrapper>
  );
}
