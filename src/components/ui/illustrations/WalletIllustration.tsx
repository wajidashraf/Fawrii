export function WalletIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="90" cy="80" r="70" fill="var(--primary)" opacity="0.06" />
      <circle cx="250" cy="170" r="58" fill="var(--accent)" opacity="0.08" />

      <rect x="46" y="64" width="228" height="138" rx="24" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="3" />
      <rect x="72" y="96" width="206" height="74" rx="20" fill="white" stroke="var(--border)" strokeWidth="2" />
      <path d="M240 96h24c11.046 0 20 8.954 20 20v34c0 11.046-8.954 20-20 20h-24V96Z" fill="var(--secondary)" opacity="0.85" />
      <circle cx="244" cy="133" r="7" fill="white" />

      <rect x="92" y="116" width="62" height="12" rx="6" fill="var(--primary)" opacity="0.18" />
      <rect x="92" y="138" width="92" height="10" rx="5" fill="var(--secondary)" opacity="0.22" />

      <circle cx="208" cy="44" r="26" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
      <text x="208" y="50" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--accent)">
        £
      </text>

      <path d="M70 214c20-18 44-27 72-27s52 9 72 27" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />
      <circle cx="44" cy="182" r="5" fill="var(--accent)" opacity="0.35" />
      <circle cx="278" cy="66" r="4" fill="var(--primary)" opacity="0.3" />
    </svg>
  );
}
