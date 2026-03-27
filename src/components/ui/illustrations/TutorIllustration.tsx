export function TutorIllustration({ className = "" }: { className?: string }) {
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

      {/* Laptop base */}
      <path d="M60 220h200l12 18H48l12-18Z" fill="var(--secondary)" opacity="0.5" />
      <rect x="76" y="108" width="168" height="112" rx="10" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="2.5" />

      {/* Screen */}
      <rect x="88" y="118" width="144" height="90" rx="4" fill="white" stroke="var(--border)" strokeWidth="1.5" />

      {/* Screen content: tutor avatar */}
      <circle cx="132" cy="150" r="16" fill="var(--primary)" opacity="0.15" />
      <circle cx="132" cy="146" r="7" fill="var(--primary)" opacity="0.3" />
      <path d="M118 164c0-7.7 6.3-14 14-14s14 6.3 14 14" fill="var(--primary)" opacity="0.18" />

      {/* Screen content: text lines */}
      <rect x="160" y="140" width="56" height="6" rx="3" fill="var(--primary)" opacity="0.15" />
      <rect x="160" y="152" width="42" height="5" rx="2.5" fill="var(--secondary)" opacity="0.18" />
      <rect x="160" y="163" width="50" height="5" rx="2.5" fill="var(--secondary)" opacity="0.12" />

      {/* Video call indicator */}
      <circle cx="216" cy="130" r="5" fill="var(--accent)" opacity="0.5" />

      {/* Whiteboard/book on the side */}
      <rect x="248" y="80" width="48" height="62" rx="6" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
      <rect x="256" y="92" width="32" height="4" rx="2" fill="var(--accent)" opacity="0.3" />
      <rect x="256" y="102" width="24" height="4" rx="2" fill="var(--accent)" opacity="0.2" />
      <rect x="256" y="112" width="28" height="4" rx="2" fill="var(--accent)" opacity="0.15" />
      <rect x="256" y="122" width="18" height="4" rx="2" fill="var(--accent)" opacity="0.2" />

      {/* Pencil */}
      <line x1="32" y1="100" x2="56" y2="168" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      <path d="M56 168l-4 14 12-8-8-6Z" fill="var(--accent)" opacity="0.6" />

      {/* Floating graduation cap */}
      <path d="M160 42l-28-14-28 14 28 14 28-14Z" fill="var(--primary)" opacity="0.2" />
      <line x1="132" y1="42" x2="132" y2="62" stroke="var(--primary)" strokeWidth="1.5" opacity="0.2" />
      <circle cx="132" cy="64" r="3" fill="var(--primary)" opacity="0.15" />

      {/* Sparkles */}
      <path d="M40 60h10M45 55v10" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M280 170h10M285 165v10" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

      {/* Decorative dots */}
      <circle cx="28" cy="140" r="4" fill="var(--primary)" opacity="0.2" />
      <circle cx="296" cy="56" r="5" fill="var(--accent)" opacity="0.3" />
      <circle cx="70" cy="46" r="3" fill="var(--secondary)" opacity="0.25" />

      {/* Chat bubbles */}
      <rect x="18" y="186" width="40" height="22" rx="8" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="1.5" />
      <circle cx="30" cy="197" r="2" fill="var(--primary)" opacity="0.4" />
      <circle cx="38" cy="197" r="2" fill="var(--primary)" opacity="0.3" />
      <circle cx="46" cy="197" r="2" fill="var(--primary)" opacity="0.2" />
    </svg>
  );
}
