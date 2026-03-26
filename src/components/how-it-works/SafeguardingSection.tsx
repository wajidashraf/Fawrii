import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { safeguardingContent } from "@/content/how-it-works";

export function SafeguardingSection() {
  return (
    <SectionWrapper
      background="default"
      maxWidth="wide"
      ariaLabel="Support, safeguarding and standards"
    >
      <div className="max-w-3xl">
        <SectionHeading>{safeguardingContent.headline}</SectionHeading>

        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-2">
          {safeguardingContent.intro}
        </p>
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
          {safeguardingContent.subIntro}
        </p>

        <BulletList
          items={safeguardingContent.bullets}
          className="space-y-3 mb-8"
        />

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
      </div>
    </SectionWrapper>
  );
}
