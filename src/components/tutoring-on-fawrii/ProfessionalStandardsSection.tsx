import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TickList } from "@/components/ui/TickList";
import { TextCta } from "@/components/ui/TextCta";
import { section3Content } from "@/content/tutoring-on-fawrii";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function ProfessionalStandardsSection() {
  return (
    <SectionWrapper
      background="default"
      maxWidth="wide"
      ariaLabel="Professional standards"
    >
      <div className="max-w-3xl">
        <MotionDiv variants={fadeInUp} repeat>
          <SectionHeading>{section3Content.headline}</SectionHeading>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.1} repeat>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
            {section3Content.intro}
          </p>
        </MotionDiv>

        {/* Checklist in a calm callout card per brief */}
        <MotionDiv variants={scaleIn} delay={0.15} repeat>
          <div className="rounded-xl bg-background-alt border border-border shadow-sm p-5 sm:p-6 mb-8">
          <h3 className="font-semibold text-foreground mb-4">
            {section3Content.standardsIntro}
          </h3>
          <TickList items={section3Content.standards} />
          </div>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.2} repeat>
          <div className="space-y-3 mb-8">
          {section3Content.closing.map((paragraph) => (
            <p
              key={paragraph}
              className="text-foreground-muted text-base sm:text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
          </div>

          <TextCta href={section3Content.cta.href}>
            {section3Content.cta.label}
          </TextCta>
        </MotionDiv>
      </div>
    </SectionWrapper>
  );
}
