import { Button } from "@/components/ui/Button";
import { finalCtaContent } from "@/content/homepage";

export function FinalCtaSection() {
  return (
    <section
      aria-label="Get started"
      className="bg-primary-light py-16 md:py-24"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
          {finalCtaContent.headline}
        </h2>
        <p className="text-foreground-muted text-[15px] sm:text-base leading-relaxed mb-6">
          {finalCtaContent.body}
        </p>

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
      </div>
    </section>
  );
}
