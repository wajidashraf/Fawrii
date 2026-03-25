/**
 * FAQs Page Content
 *
 * All copy from the official brief document.
 * Edit this file to update page content without touching components.
 *
 * Each FAQ item has:
 *   - question: the question text
 *   - answer: the main answer
 *   - clarification (optional): lighter secondary text shown below the answer
 */

// ===== Types =====

export interface FaqItem {
  question: string;
  answer: string;
  clarification?: string;
}

export interface FaqCategory {
  id: string;
  heading: string;
  items: FaqItem[];
  cta: { label: string; href: string };
}

// ===== Hero =====
export const heroContent = {
  headline: "Your questions, answered",
  body: [
    "Everything tutors commonly ask before joining Fawrii, answered clearly and honestly.",
    "This page covers how the platform works in practice, what's expected of tutors, and how support, pay, and safeguarding are handled day to day.",
  ],
  primaryCta: { label: "Become a Tutor", href: "/become-tutor" },
  secondaryCta: { label: "How it works", href: "/how-it-works" },
};

// ===== FAQ Categories =====

export const faqCategories: FaqCategory[] = [
  // ---- Category 1: Getting Started & Eligibility ----
  {
    id: "getting-started",
    heading: "Getting started & eligibility",
    cta: { label: "Apply to Become a Tutor", href: "/become-tutor" },
    items: [
      {
        question: "Is there a minimum age to tutor on Fawrii?",
        answer:
          "Yes. Tutors must be 18 or over to join and teach on the platform.",
        clarification:
          "This ensures tutors can complete verification, enter into a contract, and receive payments independently.",
      },
      {
        question: "Do I need to be a qualified teacher?",
        answer:
          "No. Fawrii works with a range of tutors, including university students, qualified teachers, and experienced professional tutors. What matters is subject knowledge, professionalism, and reliability.",
        clarification:
          "Your experience and background are reviewed during onboarding so expectations are clear from the start.",
      },
      {
        question: "Do I need a DBS check?",
        answer:
          "DBS checks are required where appropriate. This will be explained clearly during onboarding.",
        clarification:
          "Requirements depend on the age of learners and the type of tutoring you plan to do.",
      },
      {
        question: "Is applying a commitment to take work?",
        answer:
          "No. Applying to join Fawrii does not commit you to accepting lessons.",
        clarification:
          "You stay in control of your availability and which sessions you choose to take.",
      },
      {
        question: "Are there minimum availability requirements?",
        answer:
          "No. There is no minimum number of hours you must commit to.",
        clarification:
          "Tutors can update their availability at any time.",
      },
      {
        question:
          "Can I tutor on Fawrii alongside other work or platforms?",
        answer: "Yes. Tutoring on Fawrii is non-exclusive.",
        clarification:
          "You're free to tutor elsewhere, provided professional standards are maintained.",
      },
      {
        question: "What subjects or levels can I tutor?",
        answer:
          "You'll only be approved to tutor subjects and levels that match your experience and background.",
        clarification:
          "This helps ensure lessons are appropriate and expectations are clear for everyone involved.",
      },
      {
        question: "How long does onboarding take?",
        answer:
          "Onboarding times vary depending on verification requirements, but most tutors complete the process once all information is provided.",
        clarification:
          "Each step is explained clearly so there are no surprises.",
      },
      {
        question: "What if I'm new to online tutoring?",
        answer:
          "That's fine. Fawrii supports tutors who are new to online delivery as well as those with prior experience.",
        clarification:
          "Clear session structures and platform boundaries help keep lessons professional and straightforward.",
      },
    ],
  },

  // ---- Category 2: Flexibility & Time Commitment ----
  {
    id: "flexibility",
    heading: "Flexibility & time commitment",
    cta: { label: "How tutoring works", href: "/how-it-works" },
    items: [
      {
        question: "Can I tutor alongside another job or degree?",
        answer:
          "Yes. You choose when you're available and what you offer on the platform.",
        clarification:
          "Many tutors fit Fawrii around full-time work, part-time roles, or study.",
      },
      {
        question: "Do I have to commit to fixed hours?",
        answer: "No. There is no requirement to commit to fixed hours.",
        clarification:
          "You can update your availability at any time, including short-term changes.",
      },
      {
        question:
          "Can I choose only one-to-one sessions or only classes?",
        answer:
          "Yes. You decide how you tutor, whether that's one-to-one sessions, live classes, or a mix of both.",
        clarification:
          "You're free to change how you tutor as your preferences or availability change.",
      },
      {
        question:
          "Do I have to accept every lesson request I receive?",
        answer:
          "No. You're not required to accept lesson requests if they don't fit your availability or preferences.",
        clarification: "You stay in control of what you take on.",
      },
      {
        question:
          "Is there a minimum or maximum number of hours I can tutor?",
        answer:
          "No. There are no minimum or maximum hour requirements.",
        clarification:
          "You can tutor occasionally or regularly, depending on what suits you.",
      },
      {
        question: "Can I take breaks or pause tutoring altogether?",
        answer:
          "Yes. You can reduce your availability or pause tutoring whenever you need to.",
        clarification:
          "This is managed through your availability settings.",
      },
      {
        question:
          "Does being less available affect my ability to stay on the platform?",
        answer:
          "No. There's no expectation that tutors maintain a set level of activity.",
        clarification:
          "Professional standards apply when you do accept sessions, not to how often you tutor.",
      },
    ],
  },

  // ---- Category 3: Pay, Students & Demand ----
  {
    id: "pay-demand",
    heading: "Pay, students & demand",
    cta: { label: "See pay & rules", href: "/pay-and-rules" },
    items: [
      {
        question: "Who sets my rates?",
        answer: "You do. Fawrii does not set tutor fees.",
        clarification:
          "You can review and adjust your rates as your availability or demand changes.",
      },
      {
        question: "Can I charge more for instant lessons?",
        answer:
          "Yes. Tutors may choose to price instant availability higher.",
        clarification:
          "Instant sessions are optional and designed for short, on-demand support.",
      },
      {
        question: "How do courses affect earnings?",
        answer:
          "Courses are taught to multiple students. If a course attracts more learners, total earnings increase as more students join.",
        clarification: "You set the course price per student.",
      },
      {
        question:
          "What happens if I don't get students straight away?",
        answer:
          "Demand can vary, particularly at the start. Fawrii provides the platform and access to learners, while tutors control availability, pricing, and how they present their offering.",
        clarification:
          "Some tutors build demand over time as their profile and availability become established.",
      },
      {
        question: "Do I have to accept students at the rate I set?",
        answer:
          "No. Setting a rate does not oblige you to accept every request.",
        clarification:
          "You stay in control of which sessions you take on.",
      },
      {
        question: "Can I change my rates later?",
        answer:
          "Yes. You can update your rates if your circumstances or preferences change.",
        clarification: "Changes apply to future bookings.",
      },
      {
        question: "Is demand guaranteed?",
        answer:
          "No. Student demand is influenced by subject, level, availability, and timing.",
        clarification:
          "The platform supports matching, but outcomes vary by tutor.",
      },
      {
        question:
          "How does one-to-one compare with classes for earnings?",
        answer:
          "One-to-one sessions offer direct, per-session earnings. Classes allow you to teach multiple students at once, which can increase total earnings without repeating the same lesson.",
        clarification: "Tutors can use one or both approaches.",
      },
    ],
  },

  // ---- Category 4: Safeguarding & Protection ----
  {
    id: "safeguarding",
    heading: "Safeguarding & protection",
    cta: { label: "Safeguarding & standards", href: "/safeguarding" },
    items: [
      {
        question: "Why are some sessions recorded?",
        answer:
          "Sessions are recorded to help protect tutors and learners, provide clarity if a concern is raised, and support safeguarding.",
        clarification:
          "Recordings exist to provide an accurate record if something needs to be reviewed.",
      },
      {
        question:
          "Are recordings used to judge tutors or assess teaching quality?",
        answer:
          "No. Recordings are not used to monitor tutors, assess teaching style, or evaluate performance.",
        clarification:
          "They are only accessed when there is a specific safeguarding or conduct concern.",
      },
      {
        question: "Who can access recorded sessions?",
        answer:
          "Access to recordings is restricted and controlled.",
        clarification:
          "Recordings are only reviewed when necessary and by authorised members of the team.",
      },
      {
        question: "What happens if a concern is raised?",
        answer:
          "There are clear reporting routes and support in place to handle concerns appropriately.",
        clarification:
          "Tutors are supported throughout the process and are not expected to manage issues on their own.",
      },
      {
        question: "What kind of concerns can be reported?",
        answer:
          "Concerns may relate to safeguarding, professional conduct, or boundaries during lessons.",
        clarification:
          "Clear standards help ensure concerns are raised appropriately and handled proportionately.",
      },
      {
        question:
          "Will I be supported if a concern involves a student or parent?",
        answer:
          "Yes. Support is available to guide tutors and ensure situations are handled fairly and professionally.",
        clarification:
          "The platform's role is to provide structure and protection for everyone involved.",
      },
      {
        question:
          "Is safeguarding handled consistently across the platform?",
        answer:
          "Yes. Safeguarding processes are applied consistently to ensure fairness and clarity.",
        clarification:
          "This helps protect tutors as well as learners.",
      },
    ],
  },
];

// ===== Section: What Happens After You Apply =====
export const applyProcessContent = {
  headline: "What happens after you apply",
  intro: "Once you apply, the process is straightforward and guided.",
  subHeading: "Here's what to expect:",
  steps: [
    {
      title: "Application review",
      description:
        "Your details are reviewed to make sure everything is clear and complete.",
    },
    {
      title: "Required checks",
      description:
        "Any necessary verification is completed, with guidance if anything is needed from you.",
    },
    {
      title: "Onboarding",
      description:
        "You're guided through setup so you're ready to teach on the platform.",
    },
  ],
  closing:
    "You'll be kept informed at each stage, so you know where things stand and what's next.",
  cta: { label: "Apply to Become a Tutor", href: "/become-tutor" },
};

// ===== Section: Parent Reassurance =====
export const parentReassuranceContent = {
  headline: "A platform parents and schools can trust",
  intro:
    "Fawrii is built to support tutors, while also meeting the expectations parents and schools have around safety and professionalism.",
  subHeading: "That means:",
  features: [
    "Tutors are verified before teaching on the platform",
    "Lessons take place in a structured online environment",
    "Clear standards and safeguarding processes are in place",
  ],
  closing: [
    "Parents are reassured by how the platform works.",
    "Tutors remain firmly in control of how and when they teach.",
  ],
};

// ===== Section: Final CTA =====
export const finalCtaContent = {
  headline: "Ready to take the next step",
  body: [
    "If Fawrii feels like the right fit, you can apply when you're ready.",
    "Everything is clearly explained before you commit.",
  ],
  primaryCta: { label: "Become a Tutor", href: "/become-tutor" },
  secondaryCtas: [
    { label: "How tutoring works", href: "/how-it-works" },
    { label: "See pay & rules", href: "/pay-and-rules" },
    { label: "Safeguarding & standards", href: "/safeguarding" },
  ],
};
