import type { Metadata } from "next";
import Link from "next/link";
import { getIcon } from "@/components/icons";
import {
  heroContent,
  overviewContent,
  journeyDiagramSteps,
  step1Content,
  step2Content,
  step3Content,
  step4Content,
  safeguardingContent,
  trustContent,
  finalCtaContent,
} from "@/content/how-it-works";

// ===== Metadata =====
export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how tutoring works on Fawrii. A clear and flexible way to tutor online with full control over your rates and schedule.",
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

/** Step Badge */
function StepBadge({ step }: { step: number }) {
  return (
    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-semibold">
      {step}
    </span>
  );
}

/** Bullet List */
function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex items-start text-foreground-muted leading-relaxed">
          <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ===== Page Sections =====

function HeroSection() {
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
            <TextLink href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section id="tutor-journey" aria-label="Tutor journey overview" className="bg-background-alt">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
          {overviewContent.headline}
        </h2>
        <p className="text-foreground-muted text-lg mb-4">{overviewContent.intro}</p>
        <BulletList items={overviewContent.steps} className="space-y-3 mb-6" />
        <p className="text-foreground-muted text-lg mb-8">{overviewContent.closing}</p>

        {/* 4-Step Diagram */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {journeyDiagramSteps.map((item, index) => (
            <div
              key={item.step}
              className="relative flex flex-col items-center text-center p-4 rounded-xl bg-surface border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <StepBadge step={item.step} />
              <p className="mt-3 text-sm font-medium text-foreground">{item.label}</p>
              {index < journeyDiagramSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        <PrimaryButton href={overviewContent.cta.href}>
          {overviewContent.cta.label}
        </PrimaryButton>
      </div>
    </section>
  );
}

function Step1Section() {
  return (
    <section aria-label="Step 1: Join and get approved" className="bg-background">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <StepBadge step={step1Content.stepNumber} />
          <span className="text-sm font-medium text-foreground-subtle">Step 1 of 4</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
          {step1Content.headline}
        </h2>
        <div className="max-w-3xl">
          {step1Content.intro.map((para) => (
            <p key={para} className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-4">
              {para}
            </p>
          ))}
          <p className="text-foreground font-medium mt-8 mb-4">{step1Content.checklistIntro}</p>
          <div className="space-y-4 mb-6">
            {step1Content.checklist.map((item) => (
              <div key={item.text} className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
                  {getIcon(item.icon, "h-5 w-5 text-primary")}
                </div>
                <p className="text-foreground-muted pt-2">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-foreground-muted text-base sm:text-lg mb-8">{step1Content.closing}</p>
          <PrimaryButton href={step1Content.cta.href}>{step1Content.cta.label}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function Step2Section() {
  return (
    <section aria-label="Step 2: Set how you want to tutor" className="bg-background-alt">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <StepBadge step={step2Content.stepNumber} />
          <span className="text-sm font-medium text-foreground-subtle">Step 2 of 4</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
          {step2Content.headline}
        </h2>
        <div className="max-w-3xl">
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-4">
            {step2Content.intro}
          </p>
          <p className="text-foreground font-medium mb-3">You choose:</p>
          <BulletList items={step2Content.choices} className="space-y-2 mb-8" />
          <p className="text-foreground font-medium mb-4">{step2Content.sessionTypesIntro}</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {step2Content.sessionTypes.map((session) => (
              <div key={session.title} className="rounded-xl border border-border bg-surface p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center mb-3">
                  {getIcon(session.icon, "h-5 w-5 text-primary")}
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  {session.title}
                </h3>
                <p className="text-sm text-foreground-muted">{session.description}</p>
              </div>
            ))}
          </div>
          <p className="text-foreground-muted text-base sm:text-lg mb-8">{step2Content.closing}</p>
          <TextLink href={step2Content.cta.href}>{step2Content.cta.label}</TextLink>
        </div>
      </div>
    </section>
  );
}

function Step3Section() {
  return (
    <section id="teaching" aria-label="Step 3: Teaching on Fawrii" className="bg-background">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <StepBadge step={step3Content.stepNumber} />
          <span className="text-sm font-medium text-foreground-subtle">Step 3 of 4</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
          {step3Content.headline}
        </h2>
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-10 max-w-3xl">
          {step3Content.intro}
        </p>
        <div className="space-y-8 mb-10">
          {step3Content.sessionTypes.map((session) => (
            <div key={session.title} className="rounded-xl border border-border bg-surface p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center">
                  {getIcon(session.icon, "h-6 w-6 text-primary")}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {session.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed mb-4">{session.description}</p>
                  <BulletList items={session.bullets} className="space-y-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-foreground-muted text-base sm:text-lg mb-8">{step3Content.closing}</p>
        <PrimaryButton href={step3Content.cta.href}>{step3Content.cta.label}</PrimaryButton>
      </div>
    </section>
  );
}

function Step4Section() {
  return (
    <section aria-label="Step 4: Your rates and earnings" className="bg-background-alt">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <StepBadge step={step4Content.stepNumber} />
          <span className="text-sm font-medium text-foreground-subtle">Step 4 of 4</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
          {step4Content.headline}
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-foreground text-lg font-medium mb-2">{step4Content.intro}</p>
            <p className="text-foreground-muted text-base sm:text-lg mb-6">{step4Content.earningsIntro}</p>
            <div className="space-y-3 mb-8">
              {step4Content.details.map((detail) => (
                <p key={detail} className="text-foreground-muted leading-relaxed">{detail}</p>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <PrimaryButton href={step4Content.cta.href}>{step4Content.cta.label}</PrimaryButton>
              <TextLink href={step4Content.microCta.href}>{step4Content.microCta.label}</TextLink>
            </div>
          </div>
          <div className="space-y-4">
            {step4Content.earningTypes.map((earning) => (
              <div key={earning.title} className="rounded-xl border border-border bg-surface p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
                  {getIcon(earning.icon, "h-5 w-5 text-primary")}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading text-base font-semibold text-foreground">{earning.title}</h3>
                    {earning.badge && (
                      <span className="text-xs font-medium bg-primary text-white px-2 py-0.5 rounded">
                        {earning.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-primary mb-1">{earning.label}</p>
                  <p className="text-sm text-foreground-muted">{earning.description}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-foreground-subtle pt-2">
              Payments and pay-outs are managed in-platform, with clear cancellation and no-show rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SafeguardingSection() {
  return (
    <section aria-label="Support, safeguarding and standards" className="bg-background">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
            {safeguardingContent.headline}
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-2">
            {safeguardingContent.intro}
          </p>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
            {safeguardingContent.subIntro}
          </p>
          <BulletList items={safeguardingContent.bullets} className="space-y-3 mb-8" />
          <div className="space-y-2 mb-8">
            {safeguardingContent.closing.map((line) => (
              <p key={line} className="text-foreground-muted text-base sm:text-lg leading-relaxed">{line}</p>
            ))}
          </div>
          <PrimaryButton href={safeguardingContent.cta.href}>{safeguardingContent.cta.label}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section aria-label="A platform parents and schools can trust" className="bg-background-alt">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
            {trustContent.headline}
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-2">
            {trustContent.intro}
          </p>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
            {trustContent.subIntro}
          </p>
          <BulletList items={trustContent.bullets} className="space-y-3 mb-8" />
          <div className="space-y-2">
            {trustContent.closing.map((line) => (
              <p key={line} className="text-foreground-muted text-base sm:text-lg leading-relaxed">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section aria-label="Get started" className="bg-primary-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {finalCtaContent.headline}
        </h2>
        {finalCtaContent.body.map((para) => (
          <p key={para} className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-4 last:mb-8">
            {para}
          </p>
        ))}
        <PrimaryButton href={finalCtaContent.primaryCta.href}>
          {finalCtaContent.primaryCta.label}
        </PrimaryButton>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {finalCtaContent.secondaryCtas.map((cta) => (
            <TextLink key={cta.label} href={cta.href}>{cta.label}</TextLink>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Main Page =====
export default function HowItWorksPage() {
  return (
    <main>
      <HeroSection />
      <OverviewSection />
      <Step1Section />
      <Step2Section />
      <Step3Section />
      <Step4Section />
      <SafeguardingSection />
      <TrustSection />
      <FinalCtaSection />
    </main>
  );
}
