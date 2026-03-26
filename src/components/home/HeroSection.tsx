import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/content/homepage";

// TODO: Replace with real Fawrii hero image
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80";

export function HeroSection() {
  return (
    <section aria-label="Hero" className="bg-background">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy — always first on mobile */}
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.12]">
              {heroContent.headline}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground-muted leading-relaxed">
              {heroContent.subheading}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={heroContent.primaryCta.href} size="lg">
                {heroContent.primaryCta.label}
              </Button>
              <Button
                href={heroContent.secondaryCta.href}
                variant="secondary"
              >
                {heroContent.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Hero image — hidden on mobile per brief (copy-first) */}
          <div className="hidden lg:block rounded-2xl overflow-hidden bg-background-alt">
            <Image
              src={HERO_IMAGE}
              alt="A professional tutor working from a calm home environment"
              width={1200}
              height={900}
              className="w-full h-auto object-cover rounded-2xl"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
