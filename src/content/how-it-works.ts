/**
 * How It Works Page Content
 * 
 * All copy is from the official brief document.
 * Edit this file to update page content without touching components.
 */

// ===== Hero Section =====
export const heroContent = {
  headline: "How tutoring works on Fawrii",
  subheading:
    "A clear and flexible way to tutor online, where you decide how you teach, set your own rates, and work within a professional, well-supported platform.",
  microClarifier:
    "Designed for professional tutors who want clarity, control, and proper standards.",
  primaryCta: { label: "Become a Tutor", href: "/become-tutor" },
  secondaryCta: { label: "See how Fawrii works", href: "#tutor-journey" },
};

// ===== Section 1: Overview =====
export const overviewContent = {
  headline: "The tutor journey, at a glance",
  intro: "Tutoring on Fawrii follows a clear, predictable flow:",
  steps: [
    "Apply and get approved",
    "Set how you want to tutor",
    "Teach one to one (booked or instant) or run classes",
    "Get paid reliably",
  ],
  closing: "You stay in control at every stage.",
  cta: { label: "Become a Tutor", href: "/become-tutor" },
};

// Diagram labels (short versions for visual)
export const journeyDiagramSteps = [
  { step: 1, label: "Apply & approve", description: "Register and complete a short approval process.", icon: "clipboardCheck" },
  { step: 2, label: "Set how you tutor", description: "Choose your subjects, availability, and rates.", icon: "sliders" },
  { step: 3, label: "Teach lessons or classes", description: "Deliver sessions your way — booked, instant, or group.", icon: "monitor" },
  { step: 4, label: "Get paid", description: "Reliable pay-outs on a clear schedule.", icon: "currency" },
];

// ===== Step 1: Join & Get Approved =====
export const step1Content = {
  stepNumber: 1,
  headline: "Join and get approved",
  intro: [
    "Tutors begin by registering on Fawrii and completing a short approval process.",
    "We review applications to keep the platform professional, safe, and trusted for everyone involved.",
    "This process is designed to support good tutors and set clear expectations from the start.",
  ],
  checklistIntro: "What this usually includes:",
  checklist: [
    { text: "Your basic details and subjects", icon: "profile" },
    { text: "A summary of your experience", icon: "briefcase" },
    { text: "Identity and safeguarding checks where required", icon: "shield" },
  ],
  closing: "We guide you clearly through each step.",
  cta: { label: "Register as a Tutor", href: "/become-tutor" },
};

// ===== Step 2: Set How You Want to Tutor =====
export const step2Content = {
  stepNumber: 2,
  headline: "Set how you want to tutor",
  intro: "Once approved, you decide how you want to work on Fawrii.",
  choices: [
    "The subjects and levels you teach",
    "When you are available",
    "Which session types you offer",
    "Your own rates",
  ],
  sessionTypesIntro: "Session types you can enable:",
  sessionTypes: [
    {
      title: "Booked one-to-one lessons",
      description: "Scheduled in advance for planned, ongoing support.",
      icon: "calendar",
    },
    {
      title: "Instant one-to-one tutoring",
      description:
        "On-demand sessions for immediate help, if and when you choose to be available.",
      icon: "lightning",
    },
    {
      title: "Courses and live classes",
      description: "Structured lessons taught live to groups of students.",
      icon: "group",
    },
  ],
  closing: "You can offer one, two, or all three. Nothing is assigned to you. You opt in.",
  cta: { label: "See how tutoring works on Fawrii", href: "#teaching" },
};

// ===== Step 3: Teaching on Fawrii =====
export const step3Content = {
  stepNumber: 3,
  headline: "Teaching on Fawrii",
  intro:
    "Once you're set up, tutoring on Fawrii happens in three clear ways. Each feels different in practice and suits different working styles.",
  sessionTypes: [
    {
      title: "Booked one-to-one lessons",
      description:
        "These are planned sessions, scheduled in advance. You'll typically use these for ongoing support, regular students, or structured revision.",
      bullets: [
        "Lessons are booked ahead of time",
        "Sessions run at your standard rate",
        "Ideal for consistency and long-term progress",
      ],
      icon: "calendar",
    },
    {
      title: "Instant one-to-one tutoring",
      description:
        "These sessions happen when a student needs help right now. You choose when to make yourself available, and students can request support immediately.",
      bullets: [
        "Sessions are requested on demand",
        "Availability is optional and controlled by you",
        "Often shorter and more focused",
        "Can be priced higher to reflect immediacy",
      ],
      icon: "lightning",
    },
    {
      title: "Courses and live classes",
      description:
        "These are structured lessons taught live to groups of students. You plan the content once and teach multiple learners together.",
      bullets: [
        "Multiple students attend the same session",
        "Courses run on set dates and times",
        "Earnings increase as more students join",
        "No need to repeat the same lesson individually",
      ],
      icon: "group",
    },
  ],
  closing: "You can combine session types depending on availability and preference.",
  cta: { label: "Become a Tutor", href: "/become-tutor" },
};

// ===== Step 4: Your Rates and Earnings =====
export const step4Content = {
  stepNumber: 4,
  headline: "Your rates and your earnings",
  intro:
    "Fawrii does not set your fees. You decide what you charge, based on how you teach.",
  earningsIntro: "How earnings work by session type:",
  earningTypes: [
    {
      title: "Booked one-to-one lessons",
      label: "Steady, predictable",
      description: "Set your standard rate for scheduled lessons.",
      icon: "calendar",
    },
    {
      title: "Instant one-to-one tutoring",
      label: "Higher rate for fast help",
      description: "Charge more when support is needed right now.",
      badge: "Premium",
      icon: "lightning",
    },
    {
      title: "Courses and live classes",
      label: "Scale with groups",
      description: "One lesson. Multiple learners. Higher total earnings.",
      icon: "group",
    },
  ],
  details: [
    "All payments are handled through the platform, with clear rules for cancellations and no-shows.",
    "Pay-outs follow a clear schedule, so you are not chasing payments.",
    "You control pricing and availability across all session types.",
  ],
  cta: { label: "Become a Tutor", href: "/become-tutor" },
  microCta: { label: "See how earnings work", href: "/pay-and-rules" },
};

// ===== Section 3: Support, Safeguarding & Standards =====
export const safeguardingContent = {
  headline: "Support, safeguarding & standards",
  intro:
    "Fawrii is designed to support professional tutoring in a safe, structured way.",
  subIntro:
    "Safeguarding and standards are built into the platform to protect tutors as well as learners.",
  bullets: [
    "Some lessons may be recorded to provide clarity and protection if a concern is raised",
    "Clear expectations around boundaries and professional conduct",
    "Straightforward reporting routes if something does not feel right",
    "Practical support when there is an issue, dispute or concern",
  ],
  closing: [
    "This is not about monitoring how you teach.",
    "It is about creating an environment where good tutors are supported and everyone knows where they stand.",
  ],
  cta: { label: "Become a Tutor", href: "/become-tutor" },
};

// ===== Section 4: Parent & School Trust =====
export const trustContent = {
  headline: "A platform parents and schools can trust",
  intro:
    "Fawrii is designed to support high-quality tutoring in a safe, professional online environment.",
  subIntro:
    "Because learning involves tutors, learners, parents, and schools, trust is built into how the platform works.",
  bullets: [
    "Tutors complete identity and background checks before teaching",
    "Lessons take place within a secure, platform-based environment",
    "Clear conduct standards apply to all sessions",
    "Platform controls support safeguarding, accountability, and transparency",
  ],
  closing: [
    "This gives parents and schools confidence in how tutoring is delivered.",
    "And it gives tutors a professional setting where expectations are clear and support is in place.",
  ],
};

// ===== Final CTA Section =====
export const finalCtaContent = {
  headline: "When you're ready, you can get started",
  body: [
    "Fawrii is built to give tutors clarity, control, and a professional environment to work in.",
    "If the way tutoring works here feels right for you, the next step is simply to create an account and explore the platform.",
  ],
  primaryCta: { label: "Become a Tutor", href: "/become-tutor" },
  secondaryCtas: [
    { label: "Read safeguarding & standards", href: "/safeguarding" },
    { label: "See pay & rules", href: "/pay-and-rules" },
  ],
};
