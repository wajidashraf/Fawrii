// ===== CTA & Navigation Link Destinations =====

export const links = {
  becomeTutor: "/become-tutor",
  howItWorks: "/how-it-works",
  payAndRules: "/pay-and-rules",
  safeguarding: "/safeguarding",

  // Anchor links (same-page scroll)
  howTutorsWorkAnchor: "#how-tutors-work",
  payControlAnchor: "#pay-control",
} as const;

export type Links = typeof links;
