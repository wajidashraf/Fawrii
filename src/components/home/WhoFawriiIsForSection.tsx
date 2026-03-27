import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextCta } from "@/components/ui/TextCta";
import { whoFawriiIsForContent } from "@/content/homepage";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";
import { CommunityIllustration } from "@/components/ui/illustrations";

export function WhoFawriiIsForSection() {
  return (
    <SectionWrapper
      id="who-fawrii-is-for"
      background="alt"
      maxWidth="wide"
      ariaLabel="Who Fawrii is built for"
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
      <div className="max-w-3xl">
        <MotionDiv variants={fadeInUp} repeat>
          <SectionHeading>{whoFawriiIsForContent.headline}</SectionHeading>

          {/* Intro — bold key statement */}
          <p className="text-foreground font-semibold text-base sm:text-[17px] mb-2">
            {whoFawriiIsForContent.intro}
          </p>
          <p className="text-foreground-muted text-[15px] sm:text-base leading-relaxed mb-5">
            {whoFawriiIsForContent.subIntro}
          </p>
        </MotionDiv>

        {/* Values in a callout card */}
        <MotionDiv variants={scaleIn} delay={0.1} repeat>
        <div className="rounded-xl bg-surface border border-border shadow-sm p-5 sm:p-6 mb-6">
          <ul className="space-y-2.5">
            {whoFawriiIsForContent.bullets.map((item) => (
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
          {/* Closing — first line is the differentiator */}
          <p className="text-foreground font-semibold text-base sm:text-[17px] mb-2">
            {whoFawriiIsForContent.closing[0]}
          </p>
          <div className="space-y-1.5 mb-6">
            {whoFawriiIsForContent.closing.slice(1).map((line) => (
              <p
                key={line}
                className="text-foreground-muted text-[15px] sm:text-base leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>

          <TextCta href={whoFawriiIsForContent.cta.href}>
            {whoFawriiIsForContent.cta.label}
          </TextCta>
        </MotionDiv>
      </div>

      {/* Illustration — desktop only */}
      <MotionDiv variants={scaleIn} delay={0.2} repeat className="hidden lg:flex items-center justify-center sticky top-32">
        <CommunityIllustration className="w-60 xl:w-72 opacity-80" />
      </MotionDiv>
      </div>
    </SectionWrapper>
  );
}
