# Fawrii Homepage — Design & Frontend Planning Direction
Based on: `Fawrii docs/1. HOME PAGE BRIEF.docx` (Primary Source of Truth)
Inspiration blend: MyTutor (65% visual) + Tutor Me Education (35% visual)
***
## 1. Brief Understanding
**Purpose:** The homepage is a tutor-facing landing page. Its primary job is to attract, reassure, and convert professional tutors into signing up for the Fawrii platform. It is NOT a student/parent-first page — tutors are the primary audience.
**Audience:** Independent tutors evaluating whether Fawrii is a credible, professional, trustworthy platform worth joining. They are likely comparing options, skeptical of gig-marketplace promises, and sensitive to tone.
**Tone:** Calm, clear, professional, supportive. The page should feel like a considered conversation, not a sales pitch. Copy is direct, honest, and respectful of the tutor's intelligence.
**UX Intent:** Build trust through clarity. Every section answers one specific tutor question. The page moves from "What is this?" → "Why does it exist?" → "How does it work?" → "Am I protected?" → "Is this for me?" → "I'm ready to start." No section is decorative — each earns the tutor's next scroll.
***
## 2. Design Direction
### Final Homepage Style
* **Visual identity:** Modern, restrained, editorial. Clean whitespace. Minimal decoration. Typography-led hierarchy.
* **Feel:** Like a well-written professional document wrapped in a modern web experience. Not a startup landing page. Not a marketplace. Not a SaaS product page.
* **Color usage:** Muted, purposeful. Primary color used sparingly for CTAs and key emphasis only. Backgrounds alternate between white and off-white (`--background` / `--background-alt`). No bright gradients, no loud sections.
### How Prior Inspiration Applies (Visual Only)
**From MyTutor (65% — visual structure):**
* Clean section rhythm with generous vertical spacing
* Typography-forward content hierarchy
* Whitespace as a design element (breathing room between sections)
* Friendly but professional card layouts (for Section 2: How Tutors Work)
* Subtle hover states and clean button styling
**From Tutor Me Education (35% — credibility styling):**
* Data/stat presentation styling (clean number blocks)
* Institutional trust tone in layout (Section 6: Trusted by Parents and Schools)
* Compact, confidence-marker sections that don't demand attention
* Subtle divider/spacing patterns between content blocks
**What to NOT adopt from either:**
* MyTutor's parent/student-first messaging (Fawrii is tutor-first)
* MyTutor's subject search bar and pricing display (not relevant here)
* Tutor Me's B2B enterprise pitch language
* Any urgency patterns, countdowns, or aggressive CTAs from either
* Stock photography styles from either
* Badge/logo walls (brief explicitly says no compliance stamps or logos)
***
## 3. Homepage UX Strategy
### Emotional Journey (Top to Bottom)
* **Hero** → "This looks professional and clear" → Confidence established
* **Director Video** → "Real people are behind this" → Human trust earned
* **Why Fawrii Exists** → "They understand my frustrations" → Empathy connection
* **How Tutors Work** → "I can see myself using this" → Mental model formed
* **Pay, Control & Flexibility** → "I stay in control of my money" → Money anxiety removed
* **Trust & Safeguarding** → "I'll be protected, not policed" → Safety reassurance
* **Who Fawrii is Built For** → "This is exactly my kind of platform" → Self-selection confirmed
* **Trusted by Parents & Schools** → "Others will trust this too" → External credibility
* **Final CTA** → "I'm ready to take the first step" → Conversion
### CTA Hierarchy
1. **Primary CTA:** "Become a Tutor" — appears in Hero, below Director Video, in Section 4, Section 5, and Final CTA. Always a button, but never aggressive. The hero instance is the most prominent.
2. **Secondary CTAs:** "How it works", "See how tutoring works on Fawrii", "See pay & rules", "Read safeguarding & standards" — always text links, visually lighter, never competing with primary.
3. **No CTA in Section 6** (Trusted by Parents and Schools) — intentional. It's a confidence marker, not a conversion point.
**Why this works:** The page never pressures. Each CTA appears naturally after the section has answered a question. The tutor feels informed, not pushed.
***
## 4. Confirmed Homepage Structure
Section order follows the brief exactly. No additions, no reordering.
### Section 0: Hero + Director Video
* **Purpose:** Immediate clarity and legitimacy. "Is this a professional platform for tutors like me?" — answered in 5 seconds.
* **Headline:** "Tutoring That Fits Your Life — On Your Terms."
* **Subheading:** Explains Fawrii in one sentence (tutor-first, you control how/what/when).
* **Primary CTA:** "Become a Tutor" (prominent button)
* **Secondary CTA:** "How it works" (text link)
* **Director Video:** Immediately below hero. Intro text: "A short message from the team behind Fawrii". CTA below video: "Become a Tutor" (echoes hero, doesn't compete).
### Section 1: Why Fawrii Exists
* **Purpose:** Empathy. Show tutors you understand their real problems.
* **Format:** Short opening list (line-by-line pain points) → paragraph explaining the response → subtle text CTA.
* **CTA:** "See how tutoring works on Fawrii" (text link)
### Section 2: How Tutors Work On Fawrii
* **Purpose:** Mental model. Three clear teaching formats explained without hierarchy.
* **Format:** Three equal columns/cards — Booked 1-to-1, Instant 1-to-1, Courses & Live Classes.
* **Key rule:** No format should appear "better" than another. Equal visual weight.
* **CTA:** "How it works" (text link)
### Section 3: Pay, Control and Flexibility
* **Purpose:** Remove money anxiety. "You control pricing and earning."
* **Format:** Single-column text block. NOT cards or columns. Must read as settled and authoritative.
* **CTA:** "See pay & rules" (text link, NOT a button)
### Section 4: Trust, Safeguarding & Support
* **Purpose:** Reassure that safeguarding supports tutors, doesn't police them.
* **Format:** Single column, generous spacing, restrained bullet list. One shield/support icon maximum.
* **CTA:** "Become a Tutor" (text-based to avoid urgency)
### Section 5: Who Fawrii is Built For
* **Purpose:** Self-selection. Help tutors confirm "this is my kind of platform."
* **Format:** Single column, editorial-style. No "Good fit / Not a fit" split.
* **CTA:** "Become a Tutor" (text-based)
### Section 6: Trusted by Parents and Schools
* **Purpose:** External credibility signal. Brief and quiet — a confidence marker, not a pitch.
* **Format:** Short, compact. Visually lighter than tutor-focused sections.
* **Key rule:** No children imagery. No logos or badges. NO CTA.
### Section 7: Final CTA
* **Headline:** "Tutor on your terms"
* **Primary CTA:** "Become a Tutor" (dominant button)
* **Subtle reassurance:** "Signing up is the first step, not a commitment to take work."
* **Key rule:** No countdowns, urgency, icons, illustrations, or stock imagery.
***
## 5. Homepage Component Architecture
### Page-Level Structure
```warp-runnable-command
src/app/page.tsx (HomePage)
├── HeroSection
├── DirectorVideoSection
├── WhyFawriiSection
├── HowTutorsWorkSection
├── PayControlSection
├── TrustSafeguardingSection
├── WhoFawriiIsForSection
├── TrustedBySection
└── FinalCtaSection
```
### Reusable UI Components (`src/components/ui/`)
* `Button` — primary (filled) and secondary (text link) variants. Props: `variant`, `size`, `href`, `children`.
* `SectionWrapper` — consistent padding, max-width, background alternation. Props: `background`, `id`, `className`.
* `SectionHeading` — consistent h2 styling. Props: `children`, `className`.
* `TextCta` — secondary text-link CTA. Props: `href`, `children`.
* `VideoEmbed` — responsive video container. Props: `src`, `title`, `poster`.
* `FeatureCard` — used in Section 2 for tutoring formats. Props: `icon`, `title`, `description`, `features`.
* `BulletList` — styled list for Sections 1, 3, 4, 5, 6. Props: `items`, `variant`.
### Homepage Section Components (`src/components/home/`)
* `HeroSection.tsx` — headline, subheading, CTAs
* `DirectorVideoSection.tsx` — video embed + intro text + CTA
* `WhyFawriiSection.tsx` — pain points list + paragraph + CTA
* `HowTutorsWorkSection.tsx` — 3-column card grid using FeatureCard
* `PayControlSection.tsx` — single-column text + bullet list
* `TrustSafeguardingSection.tsx` — single-column + bullet list + one icon
* `WhoFawriiIsForSection.tsx` — editorial text + values list
* `TrustedBySection.tsx` — compact confidence section (no CTA)
* `FinalCtaSection.tsx` — full-width CTA block
### Static vs Configurable
* **Static:** component structure, layout, visual hierarchy, CTA hierarchy
* **Configurable:** all text content, video URL, CTA destinations, section background colors
***
## 6. Content and Configuration Strategy
All homepage copy stored in a single structured content file:
`src/content/homepage.ts` — typed exports for each section's content (headlines, body, bullets, CTA labels, CTA hrefs, video URL).
`src/content/links.ts` — all CTA destination hrefs as constants.
**Why:** Copy can be updated without touching component logic. Prepares for future CMS migration. Keeps components presentation-focused.
Example structure:
```typescript
export const heroContent = {
  headline: "Tutoring That Fits Your Life — On Your Terms.",
  subheading: "Fawrii is a tutor-first online platform...",
  primaryCta: { label: "Become a Tutor", href: "/become-tutor" },
  secondaryCta: { label: "How it works", href: "#how-tutors-work" },
};
// ... same pattern for each section
```
***
## 7. SEO and Semantic Strategy
### Heading Hierarchy
* `h1`: One per page — Hero headline
* `h2`: One per section — each section headline
* `h3`: Sub-headings within sections (e.g., tutoring format names in Section 2)
* Never skip heading levels
### Semantic HTML
* Each section in `<section>` with descriptive `id` and `aria-label`
* `<main>` wraps all homepage content
* `<ul>` / `<li>` for all bullet lists (not styled divs)
* Video with proper `title` attribute
### Metadata Updates Needed
* **Title:** Update to tutor-focused ("Fawrii — Tutoring That Fits Your Life")
* **Description:** Reflect tutor-first messaging
* **Keywords:** Add tutor-acquisition terms: "become a tutor", "online tutoring platform for tutors", "flexible tutoring work"
### Internal Linking
* Secondary CTAs link to internal pages (`/how-it-works`, `/become-tutor`, `/safeguarding`)
* Section `id` attributes enable anchor linking
***
## 8. Styling Strategy
### Spacing System
* **Between sections:** `py-16 md:py-24` (64px mobile, 96px desktop)
* **Heading to content:** `mb-6 md:mb-8`
* **Between paragraphs/bullets:** `space-y-4`
* **Pain point list (Section 1):** `space-y-2` line-by-line
* **Single-column sections max-width:** `max-w-3xl mx-auto`
* **Card sections max-width:** `max-w-6xl mx-auto`
* **Page container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
### Typography (already configured)
* **Headings:** Plus Jakarta Sans (`--font-heading`) — bold, geometric, modern
* **Body:** Inter (`--font-body`) — clean, readable, friendly
* **Hero headline:** `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading`
* **Section h2:** `text-3xl sm:text-4xl font-bold font-heading`
* **Body text:** `text-base sm:text-lg text-foreground-muted leading-relaxed font-body`
### Button Variants
* **Primary:** `bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors`. No shadows, no gradients.
* **Secondary text link:** `text-primary hover:text-primary-hover underline-offset-4 hover:underline transition-colors`. Text-only.
### Color Application
* Hero: `bg-background` (white) — copy-forward
* Alternating sections: toggle `bg-background` / `bg-background-alt`
* Final CTA: `bg-primary-light` or subtle tint for visual distinction
* No loud or saturated backgrounds anywhere
### Responsive
* Mobile-first throughout
* Hero: CTA visible without scrolling, video immediately after hero copy
* Section 2: 3 columns desktop → stacked mobile
* Single-column sections: identical across devices
* No horizontal scrolling
***
## 9. Implementation Scaffold Guidance
### File Structure to Create
```warp-runnable-command
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── TextCta.tsx
│   │   ├── VideoEmbed.tsx
│   │   ├── FeatureCard.tsx
│   │   └── BulletList.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── DirectorVideoSection.tsx
│   │   ├── WhyFawriiSection.tsx
│   │   ├── HowTutorsWorkSection.tsx
│   │   ├── PayControlSection.tsx
│   │   ├── TrustSafeguardingSection.tsx
│   │   ├── WhoFawriiIsForSection.tsx
│   │   ├── TrustedBySection.tsx
│   │   └── FinalCtaSection.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── content/
│   ├── homepage.ts
│   └── links.ts
```
### Implementation Order
1. Create `src/content/homepage.ts` with all brief copy as typed exports
2. Create `src/content/links.ts` with CTA destinations
3. Build reusable UI components (Button, SectionWrapper, SectionHeading, TextCta, BulletList, VideoEmbed, FeatureCard)
4. Build section components in brief order (Hero → Director Video → ... → Final CTA)
5. Assemble in `src/app/page.tsx`
6. Add Header and Footer layout components
7. Validate responsive behavior on all breakpoints
8. Run lint + typecheck
### Key Technical Decisions
* All section components are Server Components (no `"use client"` unless video player requires it)
* Content imported from `src/content/homepage.ts` — no hardcoded strings in components
* `SectionWrapper` handles consistent padding, max-width, background alternation
* `cn()` utility already available for conditional class merging
* No external UI library needed — Tailwind + custom components are sufficient
***
## 10. Do-Not-Break Rules
### Section Order
* Do NOT change section order. The emotional flow is intentional.
### Tone
* No aggressive marketing language ("Join now", "Get started today", "Don't miss out")
* No urgency language, countdowns, or directional arrows
* No startup hype or gig marketplace feel
### Visual
* No loud icons or abstract tech illustrations
* No stock "smiling at laptop" imagery
* No warning symbols, alert colors, cameras, or monitoring imagery
* No charts, graphs, or earnings optimization visuals
* No gradients, bright backgrounds, or decorative elements competing with copy
### CTA Behavior
* Primary CTA always a button, never aggressive
* Secondary CTAs always text links, never buttons
* Section 6 has NO CTA — intentional
* Video CTA echoes hero, doesn't compete
* Final CTA: no icons, illustrations, or stock imagery
### Content
* No children/classroom/parent-focused marketing imagery (tutor-first)
* No logos, badges, or compliance stamps in trust section
* No "Good fit / Not a fit" split in Section 5
* No format hierarchy in Section 2 — equal visual weight
* No numbers, percentages, or example prices in Section 3
### Layout
* Sections 3, 4, 5, 6: single-column only. No cards or columns.
* Section 2: three equal columns desktop, stacked mobile.
* Whitespace is part of the reassurance — do not compress.
* Mobile hero: primary CTA visible without scrolling, video immediately after hero copy.
### Reassurance
* Final CTA includes: "Signing up is the first step, not a commitment to take work."
* Safeguarding = support, not surveillance.
* Entire page makes tutors feel respected, not sold to.
