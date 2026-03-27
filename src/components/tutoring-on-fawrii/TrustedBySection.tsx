import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TickList } from "@/components/ui/TickList";
import { section6Content } from "@/content/tutoring-on-fawrii";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function TrustedBySection() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="Trusted by schools and families"
      className="py-10 md:py-16"
    >
      <div className="max-w-3xl">
        <MotionDiv variants={fadeInUp}>
        <SectionHeading>{section6Content.headline}</SectionHeading>
        </MotionDiv>

        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
          {section6Content.intro}
        </p>

        <h3 className="font-semibold text-foreground mb-4">
          {section6Content.platformProvides}
        </h3>

        <TickList items={section6Content.features} />

        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mt-8">
          {section6Content.closing}
        </p>
      </div>

      {/* No CTA — intentional per brief: background reassurance, not conversion */}
    </SectionWrapper>
  );
}
