import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, ChevronRightIcon, VideoIcon, getIcon } from "@/components/icons";
import {
  heroContent,
  section1Content,
  section2Content,
  section3Content,
  section4Content,
  section5Content,
  section6Content,
  section7Content,
  finalCtaContent,
} from "@/content/safeguarding";

export const metadata: Metadata = {
  title: "Safeguarding & Professional Standards | Fawrii",
  description:
    "Safeguarding and professional standards on Fawrii are designed to protect tutors, set clear boundaries, and create a trusted space for teaching.",
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

/** Simple Bullet List (plain dots) */
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

/** Icon Bullet List (icon + text per row, used in S1, S3, S6) */
function IconBulletList({ items }: { items: { text: string; icon: string }[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.text} className="flex items-start gap-4">
          <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
            {getIcon(item.icon, "h-5 w-5 text-primary")}
          </div>
          <p className="text-foreground-muted pt-2">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

/** Tick-list for verification checks (S2) */
function TickList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 items-start">
          <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-foreground-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ===== Page =====

export default function SafeguardingPage() {
  return (
    <main className="w-full">
      {/* ===== Hero ===== */}
      <section className="w-full bg-background py-20 md:py-32">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {heroContent.headline}
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted mb-4 leading-relaxed">
              {heroContent.subheading}
            </p>
            <p className="text-base text-foreground-subtle mb-8">
              {heroContent.supportingLine}
            </p>
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

      {/* ===== Section 1: Our Approach to Safeguarding ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section1Content.headline}
          </h2>

          <div className="space-y-4 mb-10 max-w-3xl">
            {section1Content.intro.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mb-10">
            <h3 className="font-semibold text-foreground mb-6">
              {section1Content.subHeading}
            </h3>
            <IconBulletList items={section1Content.bullets} />
          </div>

          <div className="space-y-4 mb-8 max-w-3xl">
            {section1Content.closing.map((p, idx) => (
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

      {/* ===== Section 2: Tutor Checks & Verification ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section2Content.headline}
          </h2>

          <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-3xl">
            {section2Content.intro}
          </p>

          <div className="mb-10">
            <h3 className="font-semibold text-foreground mb-6">
              {section2Content.subHeading}
            </h3>
            <TickList items={section2Content.checks} />
          </div>

          <div className="space-y-4 mb-8 max-w-3xl">
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

      {/* ===== Section 3: The Lesson Environment ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section3Content.headline}
          </h2>

          <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-3xl">
            {section3Content.intro}
          </p>

          <div className="mb-10">
            <h3 className="font-semibold text-foreground mb-6">
              {section3Content.subHeading}
            </h3>
            <IconBulletList items={section3Content.bullets} />
          </div>

          <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-3xl">
            {section3Content.closing}
          </p>

          <TextLink href={section3Content.cta.href}>
            {section3Content.cta.label}
          </TextLink>
        </div>
      </section>

      {/* ===== Section 4: Recorded Sessions ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="flex items-start gap-4 mb-6">
            <VideoIcon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              {section4Content.headline}
            </h2>
          </div>

          <p className="text-lg font-semibold text-foreground mb-6 max-w-3xl">
            {section4Content.statement}
          </p>

          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-4">
              {section4Content.subHeading}
            </h3>
            <BulletList items={section4Content.bullets} />
          </div>

          <div className="bg-background-alt rounded-xl p-6 md:p-8 shadow-sm mb-8 max-w-3xl">
            {section4Content.reassurance.map((p, idx) => (
              <p
                key={idx}
                className="text-foreground-muted leading-relaxed mb-3 last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>

          <TextLink href={section4Content.cta.href}>
            {section4Content.cta.label}
          </TextLink>
        </div>
      </section>

      {/* ===== Section 5: Handling Concerns & Support ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section5Content.headline}
          </h2>

          <div className="space-y-4 mb-10 max-w-3xl">
            {section5Content.intro.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mb-10">
            <h3 className="font-semibold text-foreground mb-6">
              {section5Content.subHeading}
            </h3>
            <BulletList items={section5Content.bullets} />
          </div>

          {/* Card flow: Issue raised → Review → Resolution */}
          <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm mb-10">
            <div className="grid md:grid-cols-5 gap-4 items-center">
              {section5Content.flowSteps.map((step, idx) => (
                <div key={step.label} className="contents">
                  <div className="bg-background-alt rounded-xl p-5 text-center border border-border shadow-sm">
                    <p className="font-bold text-foreground">{step.label}</p>
                  </div>
                  {idx < section5Content.flowSteps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center">
                      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-3xl">
            {section5Content.closing}
          </p>

          <PrimaryButton href={section5Content.cta.href}>
            {section5Content.cta.label}
          </PrimaryButton>
        </div>
      </section>

      {/* ===== Section 6: Professional Standards & Expectations ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section6Content.headline}
          </h2>

          <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-3xl">
            {section6Content.intro}
          </p>

          <div className="mb-10">
            <h3 className="font-semibold text-foreground mb-6">
              {section6Content.subHeading}
            </h3>
            <IconBulletList items={section6Content.bullets} />
          </div>

          <div className="space-y-4 mb-8 max-w-3xl">
            {section6Content.closing.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <PrimaryButton href={section6Content.cta.href}>
            {section6Content.cta.label}
          </PrimaryButton>
        </div>
      </section>

      {/* ===== Section 7: Confidence for Parents and Schools ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {section7Content.headline}
            </h2>

            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              {section7Content.intro}
            </p>

            <p className="text-foreground font-medium mb-4">
              {section7Content.subIntro}
            </p>

            <TickList items={section7Content.features} />

            <p className="text-lg text-foreground-muted leading-relaxed mt-8">
              {section7Content.closing}
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 8: Final CTA ===== */}
      <section className="w-full bg-primary-light py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {finalCtaContent.headline}
          </h2>

          <div className="mb-10">
            {finalCtaContent.body.map((p, idx) => (
              <p
                key={idx}
                className="text-lg text-foreground-muted leading-relaxed mb-3 last:mb-0"
              >
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
