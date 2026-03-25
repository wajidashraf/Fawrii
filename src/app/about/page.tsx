import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
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
} from "@/content/about";

export const metadata: Metadata = {
  title: "About Fawrii",
  description:
    "Fawrii was created to give tutors a fairer, safer, and more professional way to work online.",
};

// ===== Reusable Components =====

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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-foreground-muted leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ===== Page =====

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* ===== Hero ===== */}
      <section className="w-full bg-background py-20 md:py-32">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {heroContent.headline}
            </h1>
            <div className="space-y-3 mb-8">
              {heroContent.body.map((p, idx) => (
                <p key={idx} className="text-lg text-foreground-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
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

      {/* ===== Director Video ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-sm text-foreground-subtle mb-6">{directorVideoIntro}</p>
          <VideoEmbed title="A message from the people behind Fawrii" />
        </div>
      </section>

      {/* ===== Section 1: Why Fawrii Exists ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section1Content.headline}
          </h2>

          <p className="text-lg text-foreground-muted leading-relaxed mb-4 max-w-3xl">
            {section1Content.intro}
          </p>
          <p className="text-lg text-foreground-muted leading-relaxed mb-6 max-w-3xl">
            {section1Content.subIntro}
          </p>

          <div className="mb-8">
            <BulletList items={section1Content.frustrations} />
          </div>

          <div className="space-y-4 mb-8 max-w-3xl">
            {section1Content.response.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <TextLink href={section1Content.cta.href}>
            {section1Content.cta.label}
          </TextLink>
        </div>
      </section>

      {/* ===== Section 2: Our Mission & Values ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section2Content.headline}
          </h2>

          <div className="space-y-3 mb-8 max-w-3xl">
            {section2Content.intro.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mb-10">
            <h3 className="font-semibold text-foreground mb-6">
              {section2Content.subHeading}
            </h3>
            <BulletList items={section2Content.bullets} />
          </div>

          <div className="space-y-3 mb-8 max-w-3xl">
            {section2Content.closing.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <PrimaryButton href={section2Content.cta.href}>
            {section2Content.cta.label}
          </PrimaryButton>
        </div>
      </section>

      {/* ===== Section 3: Who's Behind Fawrii ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section3Content.headline}
          </h2>

          <div className="space-y-4 mb-8 max-w-3xl">
            {section3Content.body.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <TextLink href={section3Content.cta.href}>
            {section3Content.cta.label}
          </TextLink>
        </div>
      </section>

      {/* ===== Section 4: How We See Tutors (editorial, narrow) ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">
              {section4Content.headline}
            </h2>

            <div className="space-y-5 mb-8">
              {section4Content.body.map((p, idx) => (
                <p key={idx} className="text-lg text-foreground-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <PrimaryButton href={section4Content.cta.href}>
              {section4Content.cta.label}
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* ===== Section 5: Long-Term Vision ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section5Content.headline}
          </h2>

          <p className="text-lg text-foreground-muted leading-relaxed mb-6 max-w-3xl">
            {section5Content.intro}
          </p>

          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-4">
              {section5Content.subHeading}
            </h3>
            <BulletList items={section5Content.bullets} />
          </div>

          <div className="space-y-3 mb-8 max-w-3xl">
            {section5Content.closing.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <PrimaryButton href={section5Content.cta.href}>
            {section5Content.cta.label}
          </PrimaryButton>
        </div>
      </section>

      {/* ===== Section 6: Parent Reassurance (no CTA, centred) ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {section6Content.headline}
            </h2>

            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              {section6Content.intro}
            </p>

            <p className="font-medium text-foreground mb-6">
              {section6Content.subHeading}
            </p>

            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
              {section6Content.features.map((feature) => (
                <li key={feature} className="flex gap-3 items-start">
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-muted">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-foreground-muted leading-relaxed">
              {section6Content.closing}
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 7: Final CTA ===== */}
      <section className="w-full bg-primary-light py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {finalCtaContent.headline}
          </h2>

          <div className="mb-10">
            {finalCtaContent.body.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          <PrimaryButton href={finalCtaContent.primaryCta.href}>
            {finalCtaContent.primaryCta.label}
          </PrimaryButton>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {finalCtaContent.secondaryCtas.map((cta) => (
              <TextLink key={cta.label} href={cta.href}>
                {cta.label}
              </TextLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
