import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { CircleDotIcon } from "@/components/icons";
import { section5Content } from "@/content/tutoring-on-fawrii";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function BuiltForProfessionalsSection() {
  return (
    <SectionWrapper
      background="default"
      maxWidth="wide"
      ariaLabel="A platform built for professional tutors"
    >
      <MotionDiv variants={fadeInUp}>
      <SectionHeading>{section5Content.headline}</SectionHeading>
      </MotionDiv>

      <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-10 max-w-3xl">
        {section5Content.intro}
      </p>

      {/* Two-column layout with equal prominence per brief */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Good Fit */}
        <div className="rounded-xl bg-background-alt border border-border p-6 sm:p-8">
          <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-6">
            {section5Content.goodFit.heading}
          </h3>
          <ul className="space-y-4">
            {section5Content.goodFit.items.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <CircleDotIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground-muted leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Good Fit — identical visual weight per brief */}
        <div className="rounded-xl bg-background-alt border border-border p-6 sm:p-8">
          <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-6">
            {section5Content.notGoodFit.heading}
          </h3>
          <ul className="space-y-4">
            {section5Content.notGoodFit.items.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <CircleDotIcon className="w-5 h-5 text-foreground-subtle flex-shrink-0 mt-0.5" />
                <span className="text-foreground-muted leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
        {section5Content.closing}
      </p>

      <PrimaryButton href={section5Content.cta.href}>
        {section5Content.cta.label}
      </PrimaryButton>
    </SectionWrapper>
  );
}
