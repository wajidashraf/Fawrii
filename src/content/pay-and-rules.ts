/**
 * Pay & Rules Page Content
 *
 * All copy from the official brief document.
 * Edit this file to update page content without touching components.
 */

// ===== Hero =====
export const heroContent = {
  headline: "Clear pay. Fair rules. No surprises.",
  body: [
    "Fawrii is designed to be transparent and consistent for tutors.",
    "You set your own rates, understand how payments and cancellations work, and know what to expect before you start teaching.",
    "Everything is explained upfront, so you can focus on tutoring rather than second-guessing policies or payments.",
  ],
  primaryCta: { label: "Become a Tutor", href: "/become-tutor" },
  secondaryCta: { label: "How it works", href: "/how-it-works" },
};

// ===== Section 1: Core Principle =====
export const section1Content = {
  headline: "Our approach to pay & fairness",
  intro: "Fawrii is built around a simple idea:",
  introHighlight: "tutors should stay in control of their work and be treated fairly.",
  subHeading: "That means:",
  bullets: [
    { text: "Clear rules that are explained upfront", icon: "check" },
    { text: "No hidden deductions or unexpected charges", icon: "currency" },
    { text: "Consistent handling of pay, cancellations, and issues", icon: "sliders" },
  ],
  closing:
    "Everything on this page is here to help you understand how things work, so you can make an informed decision before you tutor on Fawrii.",
  cta: { label: "How tutoring works on Fawrii", href: "/how-it-works" },
};

// ===== Section 2: Who Sets the Pay? =====
export const section2Content = {
  headline: "Who sets the pay?",
  statement: "Fawrii does not set tutor fees.",
  youDecide: "You decide:",
  bullets: [
    "What you charge",
    "How you price different lesson types",
    "When you make yourself available",
  ],
  body: [
    "This gives you control to price your time fairly, based on demand and how you choose to tutor.",
    "Rates are set by you within the platform and remain visible and clear before any session takes place.",
  ],
  primaryCta: { label: "Become a Tutor", href: "/become-tutor" },
  secondaryCta: { label: "Guidance on setting a rate", href: "/how-it-works" },
};

// ===== Section 3: How Pay Works by Lesson Type =====
export const section3Content = {
  headline: "How pay works by lesson type",
  intro: "Tutors can earn in different ways depending on how they teach. Each option offers a different balance of planning, flexibility, and earning potential.",
  lessonTypes: [
    {
      title: "Booked 1-to-1 lessons",
      bestFor: "Planned, ongoing tutoring",
      description:
        "Booked 1-to-1 sessions are usually scheduled in advance, lesson by lesson.",
      bullets: [
        "You set your hourly rate",
        "Ideal for regular students and consistent timetables",
        "Predictable earnings and steady demand",
      ],
      summary: "Stable, planned income at your chosen rate.",
      icon: "calendar",
      badge: null,
    },
    {
      title: "Instant 1-to-1 tutoring",
      bestFor: "Flexibility and higher per-session earnings",
      description:
        "Instant sessions are requested on demand, often for urgent help or quick clarification.",
      bullets: [
        "You choose whether to be available instantly",
        "Instant availability can be priced higher",
        "Short, focused sessions with premium earning potential",
      ],
      summary: "Higher rate in exchange for being available now.",
      icon: "lightning",
      badge: "Premium",
    },
    {
      title: "Live classes & courses",
      bestFor: "Scaling income without repeating lessons",
      description:
        "Courses are structured lessons taught live to groups of students.",
      bullets: [
        "Multiple students attend the same session",
        "You can set a lower per-student price to encourage sign-ups",
        "Total earnings increase as more students join",
        "Teach once, earn from many",
      ],
      summary: "Lower individual price. Higher total earning potential.",
      icon: "group",
      badge: null,
    },
  ],
  closing:
    "All sessions are paid through the platform, with clear rules around cancellations and no-shows. You can offer one, two, or all three lesson types.",
  cta: { label: "See how tutoring works", href: "/how-it-works" },
};

// ===== Section 4: Platform Handling & Deductions =====
export const section4Content = {
  headline: "Platform handling & deductions",
  subHeading: "Clear fees. No surprises.",
  intro:
    "Fawrii handles payments and session administration so tutors are not left managing transactions or disputes themselves.",
  includes: "This includes:",
  includesBullets: [
    "Processing student payments",
    "Applying session rules fairly",
    "Handling cancellations and no-shows in line with platform policies",
  ],
  feesIntro: "Any platform fees are:",
  fees: [
    "Clear. You can always see what applies.",
    "Explained upfront. Nothing hidden in small print.",
    "Applied consistently. The same rules for everyone.",
  ],
  closing: [
    "There are no hidden deductions or unexpected charges.",
    "You'll see full details during onboarding, before you commit to teaching on the platform.",
  ],
  tagline: "You set your rates. The platform handles the administration.",
  cta: { label: "Apply to Become a Tutor", href: "/become-tutor" },
  // Flow diagram data
  flowSteps: [
    { label: "Student", detail: "Pays for the session" },
    { label: "Platform", detail: "Handles payments and administration" },
    { label: "Tutor", detail: "Paid without hidden deductions" },
  ],
};

// ===== Section 5: Cancellations & No-Shows =====
export const section5Content = {
  headline: "Cancellations & no-shows",
  subHeading: "Fair rules. Clear outcomes.",
  intro:
    "Clear cancellation and no-show rules are in place to be fair to both tutors and students.",
  bullets: [
    { text: "Expectations are set upfront, before sessions take place", icon: "calendar" },
    { text: "Policies are applied consistently across the platform", icon: "shield" },
    { text: "Support is available if something is unclear or disputed", icon: "lifeBuoy" },
  ],
  closing: [
    "Tutors are not expected to absorb losses silently.",
    "When sessions do not go to plan, the platform is designed to apply agreed rules clearly and fairly.",
  ],
  cta: { label: "Read safeguarding & standards", href: "/safeguarding" },
};

// ===== Section 6: Payouts & Reliability =====
export const section6Content = {
  headline: "Paid reliably. No chasing.",
  intro:
    "Payouts are handled through the platform on a clear, predictable schedule.",
  subHeading: "That means:",
  bullets: [
    "You know when payouts are made",
    "You do not need to chase payments",
    "Your earnings are visible and easy to track",
  ],
  closing: "You always know where you stand.",
  cta: { label: "Become a Tutor", href: "/become-tutor" },
};

// ===== Section 7: Fair Rules & Support =====
export const section7Content = {
  headline: "Fair rules, clear support",
  intro: [
    "Rules on Fawrii are in place to create clarity and fairness for everyone involved.",
    "They set expectations, support professional conduct, and ensure issues are handled properly when they arise.",
  ],
  subHeading: "That means:",
  bullets: [
    "Clear standards that apply consistently",
    "Support if something does not feel right",
    "Defined escalation routes when needed",
  ],
  closing: [
    "This is not about catching tutors out.",
    "It is about maintaining a professional, respectful environment.",
    "Standards and processes are designed to support good tutoring, not restrict it.",
  ],
};

// ===== Section 8: Parent Reassurance =====
export const section8Content = {
  headline: "A platform parents and schools can trust",
  subHeading: "Built for professional tutoring. Trusted by families and schools.",
  intro: [
    "Trust matters whenever learning happens online.",
    "Fawrii is designed with clear processes, transparent rules, and safeguarding built into the platform from the outset. These foundations support professional tutoring while providing reassurance to families and schools.",
  ],
  bulletsIntro: "That includes:",
  bullets: [
    "Transparent pricing structures",
    "Clear accountability and platform oversight",
    "Safeguarding and professional standards built in, not added later",
  ],
  closing: [
    "For parents and schools, this means confidence in how tutoring is delivered.",
    "For tutors, it supports a professional environment built on trust.",
  ],
};

// ===== Section 9: Final CTA =====
export const finalCtaContent = {
  headline: "A clear next step, when you're ready",
  body: [
    "You've seen how pay, rules, and protections work on Fawrii.",
    "If the approach feels fair, transparent, and right for you, the next step is open whenever you choose.",
  ],
  primaryCta: { label: "Become a Tutor", href: "/become-tutor" },
  secondaryCtas: [
    { label: "How it works", href: "/how-it-works" },
    { label: "Safeguarding & standards", href: "/safeguarding" },
  ],
};
