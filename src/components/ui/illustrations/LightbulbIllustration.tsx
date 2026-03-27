export function LightbulbIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Soft glow */}
      <circle cx="140" cy="130" r="110" fill="var(--primary)" opacity="0.06" />
      <circle cx="140" cy="130" r="80" fill="var(--primary)" opacity="0.08" />

      {/* Bulb body */}
      <path
        d="M140 40c-44.18 0-80 35.82-80 80 0 30.93 17.6 57.77 43.33 71.1V220h73.34v-28.9C202.4 177.77 220 150.93 220 120c0-44.18-35.82-80-80-80Z"
        fill="var(--primary-light)"
        stroke="var(--primary)"
        strokeWidth="3"
      />

      {/* Filament lines */}
      <path d="M120 120c0-11.05 8.95-20 20-20s20 8.95 20 20" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="140" y1="100" x2="140" y2="145" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Base rings */}
      <rect x="108" y="220" width="64" height="12" rx="4" fill="var(--secondary)" opacity="0.7" />
      <rect x="112" y="236" width="56" height="10" rx="4" fill="var(--secondary)" opacity="0.5" />
      <rect x="116" y="250" width="48" height="10" rx="4" fill="var(--secondary)" opacity="0.35" />

      {/* Bottom cap */}
      <path d="M124 260h32v8a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8v-8Z" fill="var(--secondary)" opacity="0.6" />

      {/* Sparkle rays */}
      <line x1="140" y1="10" x2="140" y2="28" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="60" x2="73" y2="73" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="220" y1="60" x2="207" y2="73" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="130" x2="48" y2="130" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="232" y1="130" x2="250" y2="130" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Small dots */}
      <circle cx="80" cy="48" r="4" fill="var(--primary)" opacity="0.3" />
      <circle cx="210" cy="44" r="3" fill="var(--accent)" opacity="0.4" />
      <circle cx="244" cy="96" r="3.5" fill="var(--primary)" opacity="0.25" />
    </svg>
  );
}
