export const siteConfig = {
  name: "Fawrii",
  description:
    "Fawrii is a tutor-first online platform where you decide how you teach, what you charge, and when you work — within a clear, professional framework designed to support you.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://fawrii.com",
  ogImage: "/images/og-image.png",
  keywords: [
    "become a tutor",
    "online tutoring platform for tutors",
    "flexible tutoring work",
    "tutor platform",
    "online tutoring",
    "professional tutoring",
    "tutor jobs online",
    "teach online",
  ],
  socials: [
    { platform: "LinkedIn", href: "https://linkedin.com/company/fawrii" },
    { platform: "Instagram", href: "https://instagram.com/fawrii" },
    { platform: "X", href: "https://x.com/fawrii" },
    { platform: "Facebook", href: "https://facebook.com/fawrii" },
    { platform: "YouTube", href: "https://youtube.com/@fawrii" },
    { platform: "TikTok", href: "https://tiktok.com/@fawrii" },
  ],
  footerStatement:
    "A modern tutoring platform built for professionals, trusted by families and schools.",
  companyLine: "Fawrii Ltd. All rights reserved.",
} as const;

export type SiteConfig = typeof siteConfig;
