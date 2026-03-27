export function ShieldIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="150" cy="130" r="108" fill="var(--primary)" opacity="0.06" />
      <path
        d="M150 38 228 70v72c0 63.6-42.06 112.9-78 130-35.94-17.1-78-66.4-78-130V70l78-32Z"
        fill="var(--primary-light)"
        stroke="var(--primary)"
        strokeWidth="3"
      />
      <path d="M118 154l22 22 44-50" stroke="var(--accent)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="86" y="232" width="128" height="18" rx="9" fill="var(--secondary)" opacity="0.18" />
      <circle cx="64" cy="96" r="10" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="234" cy="102" r="8" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="2" />
      <path d="M58 42h14M65 35v14" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M228 42h14M235 35v14" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
