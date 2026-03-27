export function TeamIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background glow */}
      <circle cx="160" cy="150" r="120" fill="var(--primary)" opacity="0.04" />

      {/* Heart / mission shape */}
      <path
        d="M160 240c-60-40-110-80-110-130a60 60 0 0 1 110-10 60 60 0 0 1 110 10c0 50-50 90-110 130Z"
        fill="var(--primary-light)"
        stroke="var(--primary)"
        strokeWidth="2.5"
        opacity="0.5"
      />

      {/* Center person */}
      <circle cx="160" cy="120" r="22" fill="white" stroke="var(--primary)" strokeWidth="2.5" />
      <circle cx="160" cy="114" r="9" fill="var(--primary)" opacity="0.25" />
      <path d="M144 138c0-8.8 7.2-16 16-16s16 7.2 16 16" fill="var(--primary)" opacity="0.15" />

      {/* Left person */}
      <circle cx="90" cy="140" r="18" fill="white" stroke="var(--secondary)" strokeWidth="2" />
      <circle cx="90" cy="135" r="7" fill="var(--secondary)" opacity="0.25" />
      <path d="M78 154c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="var(--secondary)" opacity="0.15" />

      {/* Right person */}
      <circle cx="230" cy="140" r="18" fill="white" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="230" cy="135" r="7" fill="var(--accent)" opacity="0.25" />
      <path d="M218 154c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="var(--accent)" opacity="0.15" />

      {/* Connecting arcs */}
      <path d="M112 146c12-14 28-20 48-20" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.25" />
      <path d="M208 146c-12-14-28-20-48-20" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.25" />

      {/* Flag / mission */}
      <rect x="152" y="56" width="3" height="38" rx="1.5" fill="var(--primary)" opacity="0.4" />
      <path d="M155 56h22l-6 10 6 10h-22V56Z" fill="var(--accent)" opacity="0.35" />

      {/* Star at top */}
      <path d="M160 28l4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1 4-8Z" fill="var(--accent)" opacity="0.3" />

      {/* Sparkles */}
      <path d="M40 80h10M45 75v10" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M274 100h10M279 95v10" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

      {/* Decorative dots */}
      <circle cx="56" cy="200" r="4" fill="var(--primary)" opacity="0.2" />
      <circle cx="268" cy="210" r="5" fill="var(--accent)" opacity="0.25" />
      <circle cx="298" cy="60" r="3" fill="var(--secondary)" opacity="0.3" />

      {/* Base line */}
      <rect x="80" y="258" width="160" height="10" rx="5" fill="var(--secondary)" opacity="0.12" />
    </svg>
  );
}
