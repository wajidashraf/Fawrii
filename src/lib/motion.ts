import type { Variants, Transition } from "framer-motion";

/* ===== Shared Easing & Timing ===== */

/** Premium ease-out curve — smooth deceleration */
export const easeOut = [0.25, 0.1, 0.25, 1] as const;

/** Slightly bouncier ease for interactive elements */
export const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

/** Standard transition for section-level animations */
export const sectionTransition: Transition = {
  duration: 0.6,
  ease: easeOut,
};

/** Faster transition for micro-interactions */
export const microTransition: Transition = {
  duration: 0.3,
  ease: easeOut,
};

/* ===== Animation Variants ===== */

/** Fade in from below — primary entrance animation */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/** Simple fade in — for supporting elements */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/** Fade in from left */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/** Fade in from right */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/** Fade in from top */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/** Scale in — for images, cards, featured elements */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/** Stagger container — orchestrates children entrance */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Stagger container with wider delay — for card grids */
export const staggerContainerWide: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/** Stagger item — child of staggerContainer */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

/* ===== Viewport Config ===== */

/** Standard viewport trigger — fires once when 80px into view */
export const viewportConfig = {
  once: true,
  margin: "-80px" as const,
};

/** Repeated viewport trigger — re-animates when scrolling in/out of view */
export const viewportConfigRepeat = {
  once: false,
  margin: "-80px" as const,
};

/** Looser viewport trigger — fires earlier */
export const viewportConfigEarly = {
  once: true,
  margin: "-40px" as const,
};
