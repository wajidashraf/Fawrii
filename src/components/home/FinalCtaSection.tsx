import { Button } from "@/components/ui/Button";
import { finalCtaContent } from "@/content/homepage";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp } from "@/lib/motion";
import { GradientBlob } from "@/components/ui/decorative";

export function FinalCtaSection() {
  return (
    <section
      aria-label="Get started"
      className="relative overflow-hidden gradient-cta py-16 md:py-24"
    >
      {/* Decorative glow */}
      <GradientBlob
        variant="teal"
        size="w-[500px] h-[500px]"
        position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        className="opacity-40"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionDiv variants={fadeInUp} repeat>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
            {finalCtaContent.headline}
          </h2>
          <p className="text-foreground-muted text-[15px] sm:text-base leading-relaxed mb-6">
            {finalCtaContent.body}
          </p>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.1} repeat>
          {/* Primary CTA — dominant */}
          <Button href={finalCtaContent.primaryCta.href}>
            {finalCtaContent.primaryCta.label}
          </Button>

          {/* Secondary text CTAs — de-emphasised */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {finalCtaContent.secondaryCtas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant="secondary">
                {cta.label}
              </Button>
            ))}
          </div>

          {/* Reassurance text */}
          <p className="mt-5 text-[13px] text-foreground-subtle">
            {finalCtaContent.reassurance}
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
