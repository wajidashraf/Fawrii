import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { section2Content } from "@/content/about";

export function MissionValuesSection() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="Our mission and values"
    >
      <SectionHeading>{section2Content.headline}</SectionHeading>

      <div className="max-w-3xl">
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

        <BulletList items={section2Content.bullets} className="space-y-3 mb-8" />

        <div className="space-y-3 mb-8">
          {section2Content.closing.map((p) => (
            <p
              key={p}
              className="text-foreground-muted text-base sm:text-lg leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        <PrimaryButton href={section2Content.cta.href}>
          {section2Content.cta.label}
        </PrimaryButton>
      </div>
    </SectionWrapper>
  );
}
