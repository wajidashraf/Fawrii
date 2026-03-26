import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextCta } from "@/components/ui/TextCta";
import { section3Content } from "@/content/about";

export function WhosBehindSection() {
  return (
    <SectionWrapper
      background="default"
      maxWidth="wide"
      ariaLabel="Who's behind Fawrii"
    >
      <SectionHeading>{section3Content.headline}</SectionHeading>

      <div className="max-w-3xl">
        <div className="space-y-4 mb-8">
          {section3Content.body.map((p) => (
            <p
              key={p}
              className="text-foreground-muted text-base sm:text-lg leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        <TextCta href={section3Content.cta.href}>
          {section3Content.cta.label}
        </TextCta>
      </div>
    </SectionWrapper>
  );
}
