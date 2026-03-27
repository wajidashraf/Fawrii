import type { Metadata } from "next";
import { ChevronRightIcon, VideoIcon } from "@/components/icons";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TextCta } from "@/components/ui/TextCta";
import { BulletList } from "@/components/ui/BulletList";
import { IconBulletList } from "@/components/ui/IconBulletList";
import { TickList } from "@/components/ui/TickList";
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
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";
import { ShieldIllustration } from "@/components/ui/illustrations";

export const metadata: Metadata = {
  title: "Safeguarding & Professional Standards | Fawrii",
  description:
    "Safeguarding and professional standards on Fawrii are designed to protect tutors, set clear boundaries, and create a trusted space for teaching.",
};

// ===== Page =====

export default function SafeguardingPage() {
  return (
    <main className="w-full">
      {/* ===== Hero ===== */}
      <section className="w-full bg-background py-20 md:py-32">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <MotionDiv variants={fadeInUp} repeat>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                {heroContent.headline}
              </h1>
            </MotionDiv>
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
              <TextCta href={heroContent.secondaryCta.href}>
                {heroContent.secondaryCta.label}
              </TextCta>
            </div>
          </div>

          {/* Illustration — desktop only */}
          <MotionDiv variants={scaleIn} delay={0.3} className="hidden lg:flex items-center justify-center">
            <ShieldIllustration className="w-64 xl:w-72 opacity-85" />
          </MotionDiv>
          </div>
        </div>
      </section>

      {/* ===== Section 1: Our Approach to Safeguarding ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <MotionDiv variants={fadeInUp} repeat>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section1Content.headline}
          </h2>
            </MotionDiv>

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

          <TextCta href={section1Content.cta.href}>
            {section1Content.cta.label}
          </TextCta>
        </div>
      </section>

      {/* ===== Section 2: Tutor Checks & Verification ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <MotionDiv variants={fadeInUp} repeat>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section2Content.headline}
          </h2>
            </MotionDiv>

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
          <MotionDiv variants={fadeInUp} repeat>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section3Content.headline}
          </h2>
            </MotionDiv>

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

          <TextCta href={section3Content.cta.href}>
            {section3Content.cta.label}
          </TextCta>
        </div>
      </section>

      {/* ===== Section 4: Recorded Sessions ===== */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <div className="flex items-start gap-4 mb-6">
            <VideoIcon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <MotionDiv variants={fadeInUp} repeat>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              {section4Content.headline}
            </h2>
            </MotionDiv>
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

          <TextCta href={section4Content.cta.href}>
            {section4Content.cta.label}
          </TextCta>
        </div>
      </section>

      {/* ===== Section 5: Handling Concerns & Support ===== */}
      <section className="w-full bg-background-alt py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <MotionDiv variants={fadeInUp} repeat>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section5Content.headline}
          </h2>
            </MotionDiv>

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
          <MotionDiv variants={fadeInUp} repeat>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {section6Content.headline}
          </h2>
            </MotionDiv>

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
            <MotionDiv variants={fadeInUp} repeat>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {section7Content.headline}
            </h2>
            </MotionDiv>

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
      <section className="w-full relative overflow-hidden gradient-cta py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <MotionDiv variants={fadeInUp} repeat>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {finalCtaContent.headline}
          </h2>
            </MotionDiv>

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
              <TextCta key={cta.label} href={cta.href}>
                {cta.label}
              </TextCta>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
