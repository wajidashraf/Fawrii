import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TextCta } from "@/components/ui/TextCta";
import { heroContent } from "@/content/how-it-works";

export function HeroSection() {
  return (
    <section aria-label="Hero" className="bg-background">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {heroContent.headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-foreground-muted leading-relaxed">
            {heroContent.subheading}
          </p>
          <p className="mt-3 text-sm text-foreground-subtle">
            {heroContent.microClarifier}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
            </PrimaryButton>
            <TextCta href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
            </TextCta>
          </div>
        </div>
      </div>
    </section>
  );
}
