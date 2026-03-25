// ===== App Constants =====

export const APP_NAME = "Fawrii";

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Animation durations (ms)
export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// Pagination defaults
export const PAGINATION = {
  defaultPageSize: 12,
  maxPageSize: 50,
} as const;

// Image sizes for responsive loading
export const IMAGE_SIZES = {
  avatar: { width: 48, height: 48 },
  thumbnail: { width: 320, height: 200 },
  card: { width: 640, height: 400 },
  hero: { width: 1920, height: 1080 },
} as const;
