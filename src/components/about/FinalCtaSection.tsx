import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TextCta } from "@/components/ui/TextCta";
import { finalCtaContent } from "@/content/about";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function FinalCtaSection() {
  return (
    <section aria-label="Get started" className="relative overflow-hidden gradient-cta py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionDiv variants={fadeInUp} repeat>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
            {finalCtaContent.headline}
          </h2>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.1} repeat>
          <div className="mb-10">
            {finalCtaContent.body.map((p) => (
              <p
                key={p}
                className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-3 last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.2} repeat>
          <PrimaryButton href={finalCtaContent.primaryCta.href}>
            {finalCtaContent.primaryCta.label}
          </PrimaryButton>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {finalCtaContent.secondaryCtas.map((cta) => (
            <TextCta key={cta.label} href={cta.href}>
              {cta.label}
            </TextCta>
          ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
