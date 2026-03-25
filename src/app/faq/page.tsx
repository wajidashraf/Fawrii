import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, ChevronRightIcon } from "@/components/icons";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import {
  heroContent,
  faqCategories,
  applyProcessContent,
  parentReassuranceContent,
  finalCtaContent,
} from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQs | Fawrii",
  description:
    "Everything tutors commonly ask before joining Fawrii, answered clearly and honestly.",
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

// ===== Page =====

export default function FaqPage() {
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
                <p
                  key={idx}
                  className="text-lg text-foreground-muted leading-relaxed"
                >
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

      {/* ===== FAQ Categories ===== */}
      {faqCategories.map((category, catIdx) => (
        <section
          key={category.id}
          id={category.id}
          className={`w-full py-16 md:py-24 ${
            catIdx % 2 === 0 ? "bg-background-alt" : "bg-background"
          }`}
        >
          <div className="max-w-[90rem] mx-auto px-6 md:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">
              {category.heading}
            </h2>

            <FaqAccordion items={category.items} />

            <div className="mt-8">
              <TextLink href={category.cta.href}>
                {category.cta.label}
              </TextLink>
            </div>
          </div>
        </section>
      ))}

      {/* ===== What Happens After You Apply ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {applyProcessContent.headline}
          </h2>

          <p className="text-lg text-foreground-muted leading-relaxed mb-4 max-w-3xl">
            {applyProcessContent.intro}
          </p>

          <p className="font-semibold text-foreground mb-8">
            {applyProcessContent.subHeading}
          </p>

          {/* 3-Step Timeline */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {applyProcessContent.steps.map((step, idx) => (
              <div key={step.title} className="flex items-start gap-4">
                {/* Step number */}
                <span className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-semibold">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-3xl">
            {applyProcessContent.closing}
          </p>

          <PrimaryButton href={applyProcessContent.cta.href}>
            {applyProcessContent.cta.label}
          </PrimaryButton>
        </div>
      </section>

      {/* ===== Parent Reassurance ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {parentReassuranceContent.headline}
            </h2>

            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              {parentReassuranceContent.intro}
            </p>

            <p className="font-medium text-foreground mb-4">
              {parentReassuranceContent.subHeading}
            </p>

            <ul className="space-y-4 mb-8">
              {parentReassuranceContent.features.map((feature) => (
                <li key={feature} className="flex gap-3 items-start">
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-muted">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-2">
              {parentReassuranceContent.closing.map((p, idx) => (
                <p
                  key={idx}
                  className="text-lg text-foreground-muted leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
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
