import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/content/homepage";

// TODO: Replace with real hero image
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80";

export function HeroSection() {
  return (
    <section aria-label="Hero" className="bg-background">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-30">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
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

          {/* Hero image — replace with real tutor image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background-alt shadow-lg">
            <Image
              src={HERO_IMAGE}
              alt="A professional tutor preparing for an online lesson"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
