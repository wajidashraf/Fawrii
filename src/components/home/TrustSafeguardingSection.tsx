import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { TextCta } from "@/components/ui/TextCta";
import { trustSafeguardingContent } from "@/content/homepage";

export function TrustSafeguardingSection() {
  return (
    <SectionWrapper
      id="trust-safeguarding"
      background="default"
      maxWidth="wide"
      ariaLabel="Trust, safeguarding and support"
    >
      <SectionHeading>{trustSafeguardingContent.headline}</SectionHeading>

      <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
        {trustSafeguardingContent.intro}
      </p>

      <BulletList
        items={trustSafeguardingContent.bullets}
        className="mb-8"
      />

      {/* Closing paragraphs */}
      <div className="space-y-3 mb-8">
        {trustSafeguardingContent.closing.map((line) => (
          <p
            key={line}
            className="text-foreground-muted text-base sm:text-lg leading-relaxed"
          >
            {line}
          </p>
        ))}
      </div>

      <TextCta href={trustSafeguardingContent.cta.href}>
        {trustSafeguardingContent.cta.label}
      </TextCta>
    </SectionWrapper>
  );
}
