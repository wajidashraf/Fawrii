import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trustedByContent } from "@/content/homepage";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";
import { BadgeIllustration } from "@/components/ui/illustrations";

export function TrustedBySection() {
  return (
    <SectionWrapper
      id="trusted-by"
      background="default"
      maxWidth="wide"
      ariaLabel="Trusted by parents and schools"
      className="py-10 md:py-14"
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
      <div className="max-w-3xl">
        <MotionDiv variants={fadeInUp} repeat>
          <SectionHeading>{trustedByContent.headline}</SectionHeading>

          {/* Intro — bold statement */}
          <p className="text-foreground font-semibold text-base sm:text-[17px] mb-2">
            {trustedByContent.intro}
          </p>
          <p className="text-foreground-muted text-[15px] sm:text-base leading-relaxed mb-5">
            {trustedByContent.subIntro}
          </p>
        </MotionDiv>

        {/* Trust signals — compact list in callout card */}
        <MotionDiv variants={scaleIn} delay={0.1} repeat>
        <div className="rounded-xl bg-background-alt border border-border shadow-sm p-5 sm:p-6 mb-6">
          <ul className="space-y-2.5">
            {trustedByContent.bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-foreground-muted text-[15px] sm:text-base leading-relaxed"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.15} repeat>
          {/* Closing — reassurance */}
          <p className="text-foreground-muted text-[15px] sm:text-base leading-relaxed">
            {trustedByContent.closing}
          </p>
        </MotionDiv>
      </div>

      {/* Illustration — desktop only */}
      <MotionDiv variants={scaleIn} delay={0.2} repeat className="hidden lg:flex items-center justify-center sticky top-32">
        <BadgeIllustration className="w-56 xl:w-64 opacity-80" />
      </MotionDiv>
      </div>

      {/* No CTA — intentional per brief */}
    </SectionWrapper>
  );
}
