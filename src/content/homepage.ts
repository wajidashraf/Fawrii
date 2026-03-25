import { links } from "./links";

// ===== Hero Section =====
export const heroContent = {
  headline: "Tutoring That Fits Your Life — On Your Terms.",
  subheading:
    "Fawrii is a tutor-first online platform where you decide how you teach, what you charge, and when you work — within a clear, professional framework designed to support you.",
  primaryCta: { label: "Become a Tutor", href: links.becomeTutor },
  secondaryCta: { label: "How it works", href: links.howTutorsWorkAnchor },
};

// ===== Director Video Section =====
export const directorVideoContent = {
  introText: "A short message from the team behind Fawrii",
  videoUrl: "/videos/director-intro.mp4",
  videoPoster: "/images/video-poster.jpg",
  cta: { label: "Become a Tutor", href: links.becomeTutor },
};

// ===== Section 1: Why Fawrii Exists =====
export const whyFawriiContent = {
  headline: "Why Fawrii Exists",
  painPoints: [
    "Too much admin.",
    "Unclear rules.",
    "Chasing payments.",
    "Not enough support when something goes wrong.",
  ],
  intro: "Many tutors tell us the same things.",
  body: [
    "Fawrii was built to change that.",
    "We've created a platform where tutors are treated as professionals, with clarity around how things work, real control over how you teach, and proper safeguards built in from the start.",
    "The focus is simple. Let tutors spend more time teaching, and less time dealing with problems.",
  ],
  cta: {
    label: "See how tutoring works on Fawrii",
    href: links.howTutorsWorkAnchor,
  },
};

// ===== Section 2: How Tutors Work On Fawrii =====
export const howTutorsWorkContent = {
  headline: "How Tutors Work On Fawrii",
  intro:
    "Tutors on Fawrii can work in three ways. You choose what you offer and when.",
  formats: [
    {
      title: "Booked one-to-one lessons",
      description:
        "Planned sessions scheduled in advance, lesson by lesson.",
      features: [
        "You set your availability",
        "Lessons are booked ahead of time",
        "Suited to regular students and ongoing support",
      ],
      note: "This is the most predictable way to tutor on the platform.",
    },
    {
      title: "Instant one-to-one tutoring",
      description:
        "On-demand sessions for students who need help right now.",
      features: [
        "You choose if and when you're available instantly",
        "Sessions are short and focused",
        "Often used for urgent questions or exam support",
      ],
      note: "You opt in. Nothing is assigned automatically.",
    },
    {
      title: "Courses and live classes",
      description:
        "Structured lessons taught live to multiple students.",
      features: [
        "You design the course and session structure",
        "Students sign up to attend",
        "One lesson can be taught to many learners",
      ],
      note: "This suits tutors who prefer a planned, repeatable format.",
    },
  ],
  closing: [
    "Some tutors focus on one format. Others combine all three.",
    "You stay in control across each option.",
    "Availability, pricing, and lesson types are always set by you.",
  ],
  cta: { label: "How it works", href: links.howItWorks },
};

// ===== Section 3: Pay, Control and Flexibility =====
export const payControlContent = {
  headline: "Pay, Control and Flexibility",
  intro: "Fawrii does not set tutor fees.",
  subIntro:
    "You decide what you charge, based on how you teach and when you're available.",
  bullets: [
    "Your rates are always set by you",
    "Instant availability can be priced higher if you choose",
    "Courses can increase total earnings as more students join",
    "Clear cancellation and no-show rules apply consistently",
    "Payments are handled through the platform on a clear schedule",
  ],
  closing:
    "Nothing is assigned. You stay in control of your time, your rates, and how you work.",
  cta: { label: "See pay & rules", href: links.payAndRules },
};

// ===== Section 4: Trust, Safeguarding & Support =====
export const trustSafeguardingContent = {
  headline: "Trust, Safeguarding & Support",
  intro:
    "Fawrii is designed to support safe, professional tutoring from the ground up.",
  bullets: [
    "Lessons may be recorded to protect tutors and learners if a concern is raised",
    "Clear standards and boundaries are set upfront",
    "Support is available if something does not feel right",
    "Clear processes are in place for cancellations, no-shows, or disputes",
  ],
  closing: [
    "This is not about monitoring tutors or judging teaching style.",
    "It is about creating a structured environment where tutors are supported and protected.",
  ],
  cta: { label: "Become a Tutor", href: links.becomeTutor },
};

// ===== Section 5: Who Fawrii is Built For =====
export const whoFawriiIsForContent = {
  headline: "Who Fawrii is built for",
  intro:
    "Fawrii is designed for tutors who want to work with clarity, control, and professionalism.",
  subIntro: "It's a strong fit if you value:",
  bullets: [
    "Flexible work that fits around your life",
    "Control over how you teach and what you charge",
    "Clear standards and proper support",
    "A platform that treats tutoring as skilled, professional work",
  ],
  closing: [
    "Fawrii is not about quick gigs or cutting corners.",
    "It's built for tutors who want to work properly and be supported while they do.",
  ],
  cta: { label: "Become a Tutor", href: links.becomeTutor },
};

// ===== Section 6: Trusted by Parents and Schools =====
export const trustedByContent = {
  headline: "Trusted by parents and schools",
  intro:
    "Fawrii is built to meet the expectations of parents and schools as well as tutors.",
  subIntro: "The platform provides:",
  bullets: [
    "Verified tutors",
    "Clear professional standards",
    "Safeguarding built into how lessons run",
    "Accountability through structured processes",
  ],
  closing:
    "This reassurance is built into the system, without changing how tutors work or limiting their control.",
};

// ===== Section 7: Final CTA =====
export const finalCtaContent = {
  headline: "Tutor on your terms",
  body: "If you want flexible tutoring work, control over your rates, and a platform built to support you professionally, Fawrii gives you a clear place to start.",
  primaryCta: { label: "Become a Tutor", href: links.becomeTutor },
  secondaryCtas: [
    { label: "How it works", href: links.howItWorks },
    { label: "Read safeguarding & standards", href: links.safeguarding },
  ],
  reassurance:
    "Signing up is the first step, not a commitment to take work.",
};
