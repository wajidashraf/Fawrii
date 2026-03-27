import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextCta } from "@/components/ui/TextCta";
import { trustSafeguardingContent } from "@/content/homepage";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";
import { ShieldIllustration } from "@/components/ui/illustrations";

export function TrustSafeguardingSection() {
  return (
    <SectionWrapper
      id="trust-safeguarding"
      background="default"
      maxWidth="wide"
      ariaLabel="Trust, safeguarding and support"
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
      <div className="max-w-3xl">
        <MotionDiv variants={fadeInUp} repeat>
          <SectionHeading>{trustSafeguardingContent.headline}</SectionHeading>

          {/* Intro — emphasized statement */}
          <p className="text-foreground font-semibold text-base sm:text-[17px] mb-5">
            {trustSafeguardingContent.intro}
          </p>
        </MotionDiv>

        {/* Key safeguarding points in callout card */}
        <MotionDiv variants={scaleIn} delay={0.1} repeat>
        <div className="rounded-xl bg-background-alt border border-border shadow-sm p-5 sm:p-6 mb-6">
          <ul className="space-y-2.5 ">
            {trustSafeguardingContent.bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-foreground text-[15px] sm:text-base leading-relaxed"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.15} repeat>
          {/* Closing — first line is key takeaway */}
          <p className="text-foreground font-semibold text-base sm:text-[17px] mb-2">
            {trustSafeguardingContent.closing[0]}
          </p>
          <div className="space-y-1.5 mb-6">
            {trustSafeguardingContent.closing.slice(1).map((line) => (
              <p
                key={line}
                className="text-foreground-muted text-[15px] sm:text-base leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>

          <TextCta href={trustSafeguardingContent.cta.href}>
            {trustSafeguardingContent.cta.label}
          </TextCta>
        </MotionDiv>
      </div>

      {/* Illustration — desktop only */}
      <MotionDiv variants={scaleIn} delay={0.2} repeat className="hidden lg:flex items-center justify-center sticky top-32">
        <ShieldIllustration className="w-56 xl:w-64 opacity-80" />
      </MotionDiv>
      </div>
    </SectionWrapper>
  );
}
