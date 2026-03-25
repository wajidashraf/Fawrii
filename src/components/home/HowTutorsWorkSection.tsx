import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { TextCta } from "@/components/ui/TextCta";
import { howTutorsWorkContent } from "@/content/homepage";

export function HowTutorsWorkSection() {
  return (
    <SectionWrapper
      id="how-tutors-work"
      background="default"
      maxWidth="wide"
      ariaLabel="How tutors work on Fawrii"
    >
      <div className="max-w-3xl">
        <SectionHeading>{howTutorsWorkContent.headline}</SectionHeading>
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-10">
          {howTutorsWorkContent.intro}
        </p>
      </div>

      {/* Three equal columns — no visual hierarchy */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {howTutorsWorkContent.formats.map((format) => (
          <FeatureCard
            key={format.title}
            title={format.title}
            description={format.description}
            features={format.features}
            note={format.note}
          />
        ))}
      </div>

      {/* Closing copy */}
      <div className="space-y-2 mb-8 max-w-3xl">
        {howTutorsWorkContent.closing.map((line) => (
          <p
            key={line}
            className="text-foreground-muted text-base sm:text-lg leading-relaxed"
          >
            {line}
          </p>
        ))}
      </div>

      <TextCta href={howTutorsWorkContent.cta.href}>
        {howTutorsWorkContent.cta.label}
      </TextCta>
    </SectionWrapper>
  );
}
