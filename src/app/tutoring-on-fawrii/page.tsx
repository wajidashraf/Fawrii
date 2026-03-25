import { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, ChevronRightIcon, CircleDotIcon, getIcon } from "@/components/icons";
import {
  heroContent,
  directorVideoIntro,
  section1Content,
  section2Content,
  section3Content,
  section4Content,
  section5Content,
  section6Content,
  finalCtaContent,
} from "@/content/tutoring-on-fawrii";

export const metadata: Metadata = {
  title: "Tutor on Your Terms | Fawrii",
  description:
    "A tutor-first platform where you set your rates, choose how you teach, and work within clear professional standards.",
};

// ===== Reusable Components =====

/** Primary CTA Button */
function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-hover shadow-sm hover:shadow-md transition-all duration-200"
    >
      {children}
    </Link>
  );
}

/** Secondary Text Link */
function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center text-primary hover:text-primary-hover font-medium transition-colors"
    >
      {children}
      <span className="ml-1">→</span>
    </Link>
  );
}

/** Bullet List */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-700">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TutoringOnFawriiPage() {
  return (
    <main className="w-full">
      {/* ===== Hero Section ===== */}
      <section className="w-full bg-background py-20 md:py-32">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {heroContent.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              {heroContent.subheading}
            </p>
            <p className="text-base text-gray-600 mb-8">
              {heroContent.supportingLine}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton href={heroContent.primaryCta.href}>
                {heroContent.primaryCta.label}
              </PrimaryButton>
              <TextLink href={heroContent.secondaryCta.href}>
                {heroContent.secondaryCta.label}
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Director Video Section ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <p className="text-sm text-gray-600 mb-6">{directorVideoIntro}</p>
          <div className="aspect-video bg-gray-200 rounded-xl shadow-sm overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Fawrii Director Message"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ===== Section 1: Why Tutors Choose Fawrii ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {section1Content.headline}
          </h2>

          <div className="space-y-4 mb-12">
            {section1Content.intro.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg text-gray-700 leading-relaxed max-w-3xl"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {section1Content.subHeading}
            </h3>
            <div className="space-y-4">
              {section1Content.bullets.map((bullet) => (
                <div key={bullet.text} className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
                    {getIcon(bullet.icon, "h-5 w-5 text-primary")}
                  </div>
                  <p className="text-gray-700 pt-2">{bullet.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
            {section1Content.closing}
          </p>

          <PrimaryButton href={section1Content.cta.href}>
            {section1Content.cta.label}
          </PrimaryButton>
        </div>
      </section>

      {/* ===== Section 2: How You'll Work on Fawrii ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {section2Content.headline}
          </h2>

          <p className="text-lg text-gray-700 mb-4 max-w-3xl">
            {section2Content.intro}
          </p>
          <p className="text-lg font-semibold text-foreground mb-8 max-w-3xl">
            {section2Content.subIntro}
          </p>

          <div className="bg-background p-6 md:p-8 rounded-lg mb-12">
            <h3 className="font-semibold text-foreground mb-4">
              {section2Content.acrossAll}
            </h3>
            <BulletList items={section2Content.acrossAllBullets} />
          </div>

          {/* 3-Column Work Formats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {section2Content.workFormats.map((format) => (
              <div key={format.title} className="bg-background p-8 rounded-xl shadow-sm">
                <div className="mb-4">
                  {getIcon(format.icon, "w-6 h-6 text-emerald-600")}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-4">
                  {format.title}
                </h4>
                <ul className="space-y-2">
                  {format.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 items-start">
                      <span className="text-emerald-600 font-bold mt-0.5">•</span>
                      <span className="text-gray-700 text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
            {section2Content.closing}
          </p>

          <TextLink href={section2Content.cta.href}>
            {section2Content.cta.label}
          </TextLink>
        </div>
      </section>

      {/* ===== Section 3: Professional Standards ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {section3Content.headline}
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
            {section3Content.intro}
          </p>

          <div className="bg-background-alt p-8 rounded-xl shadow-sm mb-12">
            <h3 className="font-semibold text-foreground mb-6">
              {section3Content.standardsIntro}
            </h3>
            <ul className="space-y-4">
              {section3Content.standards.map((standard) => (
                <li key={standard} className="flex gap-3 items-start">
                  <CheckIcon className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{standard}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 mb-8">
            {section3Content.closing.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg text-gray-700 leading-relaxed max-w-3xl"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <TextLink href={section3Content.cta.href}>
            {section3Content.cta.label}
          </TextLink>
        </div>
      </section>

      {/* ===== Section 4: You're in Control From the Start ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {section4Content.headline}
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
            {section4Content.intro}
          </p>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {section4Content.applyingMeans}
            </h3>
            <BulletList items={section4Content.bullets} />
          </div>

          {/* Card flow: Apply → Review → Onboard */}
          <div className="bg-background-alt rounded-xl p-6 md:p-8 shadow-sm mb-12">
            <div className="grid md:grid-cols-5 gap-4 items-center">
              {section4Content.timeline.map((item, idx) => (
                <div key={item.step} className="contents">
                  <div className="bg-background rounded-xl p-5 text-center border border-border shadow-sm">
                    <p className="font-bold text-foreground mb-1">{item.step}</p>
                    <p className="text-sm text-foreground-muted">{item.label}</p>
                  </div>
                  {idx < section4Content.timeline.length - 1 && (
                    <div className="hidden md:flex items-center justify-center">
                      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
            {section4Content.closing}
          </p>

          <PrimaryButton href={section4Content.cta.href}>
            {section4Content.cta.label}
          </PrimaryButton>
        </div>
      </section>

      {/* ===== Section 5: A Platform Built for Professional Tutors ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {section5Content.headline}
          </h2>

          <p className="text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed">
            {section5Content.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Good Fit */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-bold text-foreground mb-6">
                {section5Content.goodFit.heading}
              </h3>
              <ul className="space-y-4">
                {section5Content.goodFit.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CircleDotIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Good Fit */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-bold text-foreground mb-6">
                {section5Content.notGoodFit.heading}
              </h3>
              <ul className="space-y-4">
                {section5Content.notGoodFit.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CircleDotIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
            {section5Content.closing}
          </p>

          <PrimaryButton href={section5Content.cta.href}>
            {section5Content.cta.label}
          </PrimaryButton>
        </div>
      </section>

      {/* ===== Section 6: Trusted by Schools and Families ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {section6Content.headline}
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
            {section6Content.intro}
          </p>

          <div className="bg-background p-8 rounded-lg mb-12">
            <h3 className="font-semibold text-foreground mb-6">
              {section6Content.platformProvides}
            </h3>
            <ul className="space-y-4">
              {section6Content.features.map((feature) => (
                <li key={feature} className="flex gap-3 items-start">
                  <CheckIcon className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            {section6Content.closing}
          </p>
        </div>
      </section>

      {/* ===== Section 7: Final CTA ===== */}
      <section className="w-full bg-primary-light py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            {finalCtaContent.headline}
          </h2>

          <div className="max-w-2xl mx-auto text-center mb-12">
            {finalCtaContent.body.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg text-gray-700 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <PrimaryButton href={finalCtaContent.primaryCta.href}>
              {finalCtaContent.primaryCta.label}
            </PrimaryButton>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            {finalCtaContent.secondaryCtas.map((cta) => (
              <TextLink key={cta.href} href={cta.href}>
                {cta.label}
              </TextLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
