import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { TextCta } from "@/components/ui/TextCta";
import { getIcon } from "@/components/icons";
import { section2Content } from "@/content/tutoring-on-fawrii";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function HowYouWorkSection() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="How you'll work on Fawrii"
    >
      <MotionDiv variants={fadeInUp} repeat>
        <SectionHeading>{section2Content.headline}</SectionHeading>
      </MotionDiv>

      <MotionDiv variants={fadeInUp} delay={0.1} repeat>
        <div className="max-w-3xl mb-8">
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-2">
            {section2Content.intro}
          </p>
          <p className="text-foreground font-semibold text-base sm:text-[17px]">
            {section2Content.subIntro}
          </p>
        </div>
      </MotionDiv>

      {/* Shared principles callout */}
      <MotionDiv variants={scaleIn} delay={0.15} repeat>
        <div className="rounded-xl bg-surface border border-border shadow-sm p-5 sm:p-6 mb-8 max-w-3xl">
        <h3 className="font-semibold text-foreground mb-4">
          {section2Content.acrossAll}
        </h3>
        <BulletList items={section2Content.acrossAllBullets} />
        </div>
      </MotionDiv>

      {/* 3-column work format cards — identical layout to Pay section per brief */}
      <MotionDiv variants={scaleIn} delay={0.2} repeat>
        <div className="grid md:grid-cols-3 gap-5 mb-8">
        {section2Content.workFormats.map((format) => (
          <div
            key={format.title}
            className="rounded-xl bg-surface border border-border shadow-sm p-5 sm:p-6"
          >
            <div className="flex flex-row md:flex-col items-start gap-4 md:gap-0">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center md:mb-4">
                {getIcon(format.icon, "h-5 w-5 text-primary")}
              </div>
              <div className="flex-1 md:contents">
                <h4 className="font-heading text-base font-semibold text-foreground mb-3">
                  {format.title}
                </h4>
                <ul className="space-y-2">
                  {format.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-foreground-muted text-sm leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        </div>
      </MotionDiv>

      <MotionDiv variants={fadeInUp} delay={0.25} repeat>
        <div className="max-w-3xl">
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-8">
          {section2Content.closing}
        </p>
        <TextCta href={section2Content.cta.href}>
          {section2Content.cta.label}
        </TextCta>
        </div>
      </MotionDiv>
    </SectionWrapper>
  );
}
