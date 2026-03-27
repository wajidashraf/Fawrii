import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { getIcon } from "@/components/icons";
import { section4Content } from "@/content/tutoring-on-fawrii";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function InControlSection() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="You're in control from the start"
    >
      <div className="max-w-3xl">
        <MotionDiv variants={fadeInUp} repeat>
          <SectionHeading>{section4Content.headline}</SectionHeading>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.1} repeat>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
            {section4Content.intro}
          </p>

          <h3 className="font-semibold text-foreground mb-4">
            {section4Content.applyingMeans}
          </h3>
        </MotionDiv>

        <MotionDiv variants={scaleIn} delay={0.15} repeat>
          <div className="rounded-xl bg-surface border border-border shadow-sm p-5 sm:p-6 mb-8">
            <BulletList items={section4Content.bullets} />
          </div>
        </MotionDiv>
      </div>

      {/* Timeline: Apply → Review → Onboard */}
      <MotionDiv variants={scaleIn} delay={0.2} repeat>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {section4Content.timeline.map((item, idx) => (
          <div key={item.step} className="relative flex sm:flex-col items-stretch">
            {/* Card */}
            <div className="flex-1 w-full flex flex-col rounded-xl bg-surface border border-border shadow-sm p-5 sm:p-6 hover:shadow-md transition-shadow">
              {/* Icon */}
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary-light mb-4 sm:mx-auto">
                {getIcon(item.icon, "w-5 h-5 text-primary")}
              </div>

              {/* Step label */}
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 sm:text-center">
                Step {idx + 1}
              </p>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground mb-2 sm:text-center">
                {item.step}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground-muted leading-relaxed sm:text-center">
                {item.label}
              </p>
            </div>

            {/* Arrow connector (desktop only) */}
            {idx < section4Content.timeline.length - 1 && (
              <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
        </div>
      </MotionDiv>

      <MotionDiv variants={fadeInUp} delay={0.25} repeat>
        <div className="max-w-3xl">
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-8">
          {section4Content.closing}
        </p>

        <PrimaryButton href={section4Content.cta.href}>
          {section4Content.cta.label}
        </PrimaryButton>
        </div>
      </MotionDiv>
    </SectionWrapper>
  );
}
