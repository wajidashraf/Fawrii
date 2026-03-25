import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { TextCta } from "@/components/ui/TextCta";
import { whoFawriiIsForContent } from "@/content/homepage";

export function WhoFawriiIsForSection() {
  return (
    <SectionWrapper
      id="who-fawrii-is-for"
      background="alt"
      maxWidth="wide"
      ariaLabel="Who Fawrii is built for"
    >
      <SectionHeading>{whoFawriiIsForContent.headline}</SectionHeading>

      <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-2">
        {whoFawriiIsForContent.intro}
      </p>
      <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
        {whoFawriiIsForContent.subIntro}
      </p>

      <BulletList items={whoFawriiIsForContent.bullets} className="mb-8" />

      {/* Closing paragraphs */}
      <div className="space-y-3 mb-8">
        {whoFawriiIsForContent.closing.map((line) => (
          <p
            key={line}
            className="text-foreground-muted text-base sm:text-lg leading-relaxed"
          >
            {line}
          </p>
        ))}
      </div>

      <TextCta href={whoFawriiIsForContent.cta.href}>
        {whoFawriiIsForContent.cta.label}
      </TextCta>
    </SectionWrapper>
  );
}
