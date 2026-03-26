import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBulletList } from "@/components/ui/IconBulletList";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { section1Content } from "@/content/tutoring-on-fawrii";

export function WhyTutorsChooseSection() {
  return (
    <SectionWrapper
      background="default"
      maxWidth="wide"
      ariaLabel="Why tutors choose Fawrii"
    >
      <SectionHeading>{section1Content.headline}</SectionHeading>

      <div className="max-w-3xl">
        <div className="space-y-3 mb-8">
          {section1Content.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-foreground-muted text-base sm:text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <h3 className="font-semibold text-foreground mb-6">
          {section1Content.subHeading}
        </h3>

        <IconBulletList items={section1Content.bullets} />

        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mt-8 mb-8">
          {section1Content.closing}
        </p>

        <PrimaryButton href={section1Content.cta.href}>
          {section1Content.cta.label}
        </PrimaryButton>
      </div>
    </SectionWrapper>
  );
}
