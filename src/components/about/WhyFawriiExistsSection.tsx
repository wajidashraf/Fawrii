import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { TextCta } from "@/components/ui/TextCta";
import { section1Content } from "@/content/about";

export function WhyFawriiExistsSection() {
  return (
    <SectionWrapper
      background="default"
      maxWidth="wide"
      ariaLabel="Why Fawrii exists"
    >
      <SectionHeading>{section1Content.headline}</SectionHeading>

      <div className="max-w-3xl">
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-4">
          {section1Content.intro}
        </p>
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
          {section1Content.subIntro}
        </p>

        <div className="mb-8">
          <BulletList items={section1Content.frustrations} />
        </div>

        <div className="space-y-3 mb-8">
          {section1Content.response.map((p) => (
            <p
              key={p}
              className="text-foreground-muted text-base sm:text-lg leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        <TextCta href={section1Content.cta.href}>
          {section1Content.cta.label}
        </TextCta>
      </div>
    </SectionWrapper>
  );
}
