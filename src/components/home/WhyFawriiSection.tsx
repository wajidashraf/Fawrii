import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextCta } from "@/components/ui/TextCta";
import { whyFawriiContent } from "@/content/homepage";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";
import { LightbulbIllustration } from "@/components/ui/illustrations";

export function WhyFawriiSection() {
  return (
    <SectionWrapper
      id="why-fawrii"
      background="alt"
      maxWidth="wide"
      ariaLabel="Why Fawrii exists"
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
      <div className="max-w-3xl">
        <MotionDiv variants={fadeInUp} repeat>
          <SectionHeading>{whyFawriiContent.headline}</SectionHeading>

          <p className="text-[15px] sm:text-base text-foreground-muted leading-relaxed mb-4">
            {whyFawriiContent.intro}
          </p>
        </MotionDiv>

        {/* Pain points — visually distinct callout */}
        <MotionDiv variants={scaleIn} delay={0.1} repeat>
        <div className="rounded-xl bg-surface border border-border shadow-sm p-5 sm:p-6 mb-6">
            <ul className="space-y-2.5">
              {whyFawriiContent.painPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-foreground text-[15px] sm:text-base font-medium"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.15} repeat>
          {/* Transition statement — stands out */}
          <p className="text-foreground font-semibold text-base sm:text-[17px] mb-3">
            {whyFawriiContent.body[0]}
          </p>

          {/* Remaining body paragraphs */}
          <div className="space-y-3 mb-6">
            {whyFawriiContent.body.slice(1).map((paragraph) => (
              <p
                key={paragraph}
                className="text-foreground-muted text-[15px] sm:text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <TextCta href={whyFawriiContent.cta.href}>
            {whyFawriiContent.cta.label}
          </TextCta>
        </MotionDiv>
      </div>

      {/* Illustration — desktop only */}
      <MotionDiv variants={scaleIn} delay={0.2} repeat className="hidden lg:flex items-center justify-center sticky top-32">
        <LightbulbIllustration className="w-56 xl:w-64 opacity-80" />
      </MotionDiv>
      </div>
    </SectionWrapper>
  );
}
