import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextCta } from "@/components/ui/TextCta";
import { whyFawriiContent } from "@/content/homepage";

export function WhyFawriiSection() {
  return (
    <SectionWrapper
      id="why-fawrii"
      background="alt"
      maxWidth="wide"
      ariaLabel="Why Fawrii exists"
    >
      <SectionHeading>{whyFawriiContent.headline}</SectionHeading>

      <p className="text-lg text-foreground-muted leading-relaxed mb-4">
        {whyFawriiContent.intro}
      </p>

      {/* Pain points — line-by-line stacking per brief */}
      <div className="space-y-2 mb-8">
        {whyFawriiContent.painPoints.map((point) => (
          <p
            key={point}
            className="text-foreground-muted text-lg leading-relaxed"
          >
            {point}
          </p>
        ))}
      </div>

      {/* Body paragraphs */}
      <div className="space-y-4 mb-8">
        {whyFawriiContent.body.map((paragraph) => (
          <p
            key={paragraph}
            className="text-foreground-muted text-base sm:text-lg leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <TextCta href={whyFawriiContent.cta.href}>
        {whyFawriiContent.cta.label}
      </TextCta>
    </SectionWrapper>
  );
}
