import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/content/homepage";
import { MotionDiv } from "@/components/ui/motion";
import { GradientBlob, DotPattern } from "@/components/ui/decorative";
import { fadeInUp, fadeInDown, scaleIn } from "@/lib/motion";

// TODO: Replace with real Fawrii hero image
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80";

export function HeroSection() {
  return (
    <section aria-label="Hero" className="relative bg-background flex justify-center items-center overflow-hidden gradient-hero">
      {/* Decorative elements */}
      <GradientBlob
        variant="teal"
        size="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]"
        position="-top-32 -right-32"
        className="opacity-60"
      />
      <GradientBlob
        variant="accent"
        size="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]"
        position="-bottom-20 -left-20"
        className="opacity-40"
      />

      <MotionDiv variants={fadeInDown} repeat>
        <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Copy — always first on mobile */}
            <div className="max-w-2xl">
            <MotionDiv variants={fadeInUp} repeat>
                <h1
                  className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.12]"
                  style={{ wordSpacing: '10px', lineHeight: 1.3 }}
                >
                  {heroContent.headline}
                </h1>
              </MotionDiv>
              <MotionDiv variants={fadeInUp} delay={0.1} repeat>
                <p className="mt-6 text-lg sm:text-xl text-foreground-muted leading-relaxed">
                  {heroContent.subheading}
                </p>
              </MotionDiv>
              <MotionDiv variants={fadeInUp} delay={0.2} repeat>
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
              </MotionDiv>
            </div>

            {/* Hero image */}
            <MotionDiv variants={scaleIn} delay={0.3} className="relative" repeat>
              <DotPattern className="rounded-2xl" />
              <div className="rounded-2xl overflow-hidden bg-background-alt">
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
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}
