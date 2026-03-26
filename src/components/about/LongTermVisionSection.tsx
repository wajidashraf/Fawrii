import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { section5Content } from "@/content/about";

export function LongTermVisionSection() {
  return (
    <SectionWrapper
      background="default"
      maxWidth="wide"
      ariaLabel="Built with long-term responsibility in mind"
    >
      <SectionHeading>{section5Content.headline}</SectionHeading>

      <div className="max-w-3xl">
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
          {section5Content.intro}
        </p>

        <h3 className="font-semibold text-foreground mb-4">
          {section5Content.subHeading}
        </h3>

        <BulletList items={section5Content.bullets} className="space-y-3 mb-8" />

        <div className="space-y-3 mb-8">
          {section5Content.closing.map((p) => (
            <p
              key={p}
              className="text-foreground-muted text-base sm:text-lg leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        <PrimaryButton href={section5Content.cta.href}>
          {section5Content.cta.label}
        </PrimaryButton>
      </div>
    </SectionWrapper>
  );
}
