import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TextCta } from "@/components/ui/TextCta";
import { heroContent } from "@/content/tutoring-on-fawrii";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";
import { TutorIllustration } from "@/components/ui/illustrations";

export function HeroSection() {
  return (
    <section aria-label="Hero" className="bg-background">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
        <div className="max-w-3xl">
          <MotionDiv variants={fadeInUp} repeat>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
              {heroContent.headline}
            </h1>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.1} repeat>
            <p className="mt-6 text-lg sm:text-xl text-foreground-muted leading-relaxed">
              {heroContent.subheading}
            </p>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.15} repeat>
            <p className="mt-3 text-sm text-foreground-subtle">
              {heroContent.supportingLine}
            </p>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} delay={0.2} repeat>
            <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
            </PrimaryButton>
              <TextCta href={heroContent.secondaryCta.href}>
                {heroContent.secondaryCta.label}
              </TextCta>
            </div>
          </MotionDiv>
        </div>

        {/* Illustration — desktop only */}
        <MotionDiv variants={scaleIn} delay={0.3} repeat className="hidden lg:flex items-center justify-center">
          <TutorIllustration className="w-64 xl:w-72 opacity-85" />
        </MotionDiv>
        </div>
      </div>
    </section>
  );
}
