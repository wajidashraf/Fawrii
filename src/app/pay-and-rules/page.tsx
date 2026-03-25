import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, ChevronRightIcon, getIcon } from "@/components/icons";
import {
  heroContent,
  section1Content,
  section2Content,
  section3Content,
  section4Content,
  section5Content,
  section6Content,
  section7Content,
  section8Content,
  finalCtaContent,
} from "@/content/pay-and-rules";

export const metadata: Metadata = {
  title: "Pay & Rules | Fawrii",
  description:
    "Clear pay, fair rules, no surprises. You set your own rates on Fawrii and understand how payments and cancellations work.",
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

export default function PayAndRulesPage() {
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

      {/* ===== Section 1: Our Approach to Pay & Fairness ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section1Content.headline}
          </h2>

          <p className="text-lg text-foreground-muted leading-relaxed mb-1 max-w-3xl">
            {section1Content.intro}
          </p>
          <p className="text-lg font-semibold text-foreground mb-8 max-w-3xl">
            {section1Content.introHighlight}
          </p>

          <div className="mb-10">
            <h3 className="font-semibold text-foreground mb-6">{section1Content.subHeading}</h3>
            <IconBulletList items={section1Content.bullets} />
          </div>

          <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-3xl">
            {section1Content.closing}
          </p>

          <TextLink href={section1Content.cta.href}>
            {section1Content.cta.label}
          </TextLink>
        </div>
      </section>

      {/* ===== Section 2: Who Sets the Pay? ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section2Content.headline}
          </h2>

          <p className="text-lg font-semibold text-foreground mb-6 max-w-3xl">
            {section2Content.statement}
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">
              {section2Content.youDecide}
            </h3>
            <BulletList items={section2Content.bullets} />
          </div>

          <div className="space-y-3 mb-8 max-w-3xl">
            {section2Content.body.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton href={section2Content.primaryCta.href}>
              {section2Content.primaryCta.label}
            </PrimaryButton>
            <TextLink href={section2Content.secondaryCta.href}>
              {section2Content.secondaryCta.label}
            </TextLink>
          </div>
        </div>
      </section>

      {/* ===== Section 3: How Pay Works by Lesson Type ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {section3Content.headline}
          </h2>

          <p className="text-lg text-foreground-muted leading-relaxed mb-10 max-w-3xl">
            {section3Content.intro}
          </p>

          {/* 3-Column Lesson Type Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {section3Content.lessonTypes.map((type) => (
              <div
                key={type.title}
                className="bg-background rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
              >
                {/* Icon + badge row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
                    {getIcon(type.icon, "h-5 w-5 text-primary")}
                  </div>
                  {type.badge && (
                    <span className="text-xs font-medium bg-primary text-white px-2.5 py-0.5 rounded">
                      {type.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  {type.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  Best for: {type.bestFor}
                </p>
                <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                  {type.description}
                </p>

                <ul className="space-y-2 mb-4 flex-1">
                  {type.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-semibold text-foreground border-t border-border pt-4">
                  {type.summary}
                </p>
              </div>
            ))}
          </div>

          <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-3xl">
            {section3Content.closing}
          </p>

          <TextLink href={section3Content.cta.href}>
            {section3Content.cta.label}
          </TextLink>
        </div>
      </section>

      {/* ===== Section 4: Platform Handling & Deductions ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            {section4Content.headline}
          </h2>
          <p className="text-xl font-semibold text-foreground mb-6">
            {section4Content.subHeading}
          </p>

          <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-3xl">
            {section4Content.intro}
          </p>

          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-4">{section4Content.includes}</h3>
            <BulletList items={section4Content.includesBullets} />
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-4">{section4Content.feesIntro}</h3>
            <TickList items={section4Content.fees} />
          </div>

          {/* Flow Diagram: Student → Platform → Tutor */}
          <div className="bg-background-alt rounded-xl p-6 md:p-8 shadow-sm mb-8">
            <div className="grid md:grid-cols-5 gap-4 items-center">
              {section4Content.flowSteps.map((step, idx) => (
                <div key={step.label} className="contents">
                  <div className="bg-background rounded-xl p-5 text-center border border-border shadow-sm">
                    <p className="font-bold text-foreground mb-1">{step.label}</p>
                    <p className="text-sm text-foreground-muted">{step.detail}</p>
                  </div>
                  {idx < section4Content.flowSteps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center">
                      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 mb-6 max-w-3xl">
            {section4Content.closing.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">{p}</p>
            ))}
          </div>

          <p className="text-lg font-semibold text-foreground mb-8 max-w-3xl">
            {section4Content.tagline}
          </p>

          <PrimaryButton href={section4Content.cta.href}>
            {section4Content.cta.label}
          </PrimaryButton>
        </div>
      </section>

      {/* ===== Section 5: Cancellations & No-Shows ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            {section5Content.headline}
          </h2>
          <p className="text-xl font-semibold text-foreground mb-6">
            {section5Content.subHeading}
          </p>

          <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-3xl">
            {section5Content.intro}
          </p>

          <div className="mb-10">
            <IconBulletList items={section5Content.bullets} />
          </div>

          <div className="space-y-3 mb-8 max-w-3xl">
            {section5Content.closing.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">{p}</p>
            ))}
          </div>

          <TextLink href={section5Content.cta.href}>
            {section5Content.cta.label}
          </TextLink>
        </div>
      </section>

      {/* ===== Section 6: Payouts & Reliability ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section6Content.headline}
          </h2>

          <p className="text-lg text-foreground-muted leading-relaxed mb-6 max-w-3xl">
            {section6Content.intro}
          </p>

          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-4">{section6Content.subHeading}</h3>
            <BulletList items={section6Content.bullets} />
          </div>

          <p className="text-lg font-semibold text-foreground mb-8 max-w-3xl">
            {section6Content.closing}
          </p>

          <PrimaryButton href={section6Content.cta.href}>
            {section6Content.cta.label}
          </PrimaryButton>
        </div>
      </section>

      {/* ===== Section 7: Fair Rules & Support (no CTA) ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section7Content.headline}
          </h2>

          <div className="space-y-3 mb-8 max-w-3xl">
            {section7Content.intro.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="mb-10">
            <h3 className="font-semibold text-foreground mb-4">{section7Content.subHeading}</h3>
            <BulletList items={section7Content.bullets} />
          </div>

          <div className="space-y-3 max-w-3xl">
            {section7Content.closing.map((p, idx) => (
              <p key={idx} className="text-lg text-foreground-muted leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 8: Parent Reassurance (no CTA) ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {section8Content.headline}
            </h2>
            <p className="text-lg font-semibold text-foreground mb-6">
              {section8Content.subHeading}
            </p>

            <div className="space-y-3 mb-6">
              {section8Content.intro.map((p, idx) => (
                <p key={idx} className="text-lg text-foreground-muted leading-relaxed">{p}</p>
              ))}
            </div>

            <h3 className="font-medium text-foreground mb-4">{section8Content.bulletsIntro}</h3>
            <TickList items={section8Content.bullets} />

            <div className="space-y-3 mt-8">
              {section8Content.closing.map((p, idx) => (
                <p key={idx} className="text-lg text-foreground-muted leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 9: Final CTA ===== */}
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
