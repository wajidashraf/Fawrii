export function FaqIllustration({ className = "" }: { className?: string }) {
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

      {/* Large question bubble */}
      <rect x="60" y="40" width="160" height="120" rx="20" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="2.5" />
      <path d="M120 160v24l28-24h-28Z" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Big question mark */}
      <text x="140" y="120" textAnchor="middle" fontSize="64" fontWeight="700" fill="var(--primary)" opacity="0.35">?</text>

      {/* Small answer bubble */}
      <rect x="180" y="170" width="110" height="72" rx="16" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
      <path d="M250 242v18l-20-18h20Z" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" />

      {/* Answer lines */}
      <rect x="198" y="192" width="56" height="6" rx="3" fill="var(--accent)" opacity="0.25" />
      <rect x="198" y="204" width="72" height="5" rx="2.5" fill="var(--accent)" opacity="0.18" />
      <rect x="198" y="215" width="44" height="5" rx="2.5" fill="var(--accent)" opacity="0.14" />

      {/* Checkmark in answer */}
      <path d="M262 196l4 4 8-9" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />

      {/* Small floating bubbles */}
      <circle cx="260" cy="60" r="18" fill="white" stroke="var(--secondary)" strokeWidth="2" />
      <text x="260" y="67" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--secondary)" opacity="0.5">?</text>

      <circle cx="46" cy="200" r="14" fill="white" stroke="var(--primary)" strokeWidth="1.5" />
      <text x="46" y="206" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--primary)" opacity="0.4">?</text>

      {/* Sparkles */}
      <path d="M28 100h10M33 95v10" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M292 140h10M297 135v10" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

      {/* Decorative dots */}
      <circle cx="290" cy="44" r="4" fill="var(--accent)" opacity="0.3" />
      <circle cx="28" cy="150" r="3" fill="var(--primary)" opacity="0.2" />
      <circle cx="160" cy="280" r="5" fill="var(--secondary)" opacity="0.15" />
    </svg>
  );
}
