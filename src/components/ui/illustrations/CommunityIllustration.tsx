export function CommunityIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="160" cy="124" r="100" fill="var(--primary)" opacity="0.05" />

      <circle cx="160" cy="86" r="32" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="3" />
      <circle cx="92" cy="116" r="24" fill="white" stroke="var(--secondary)" strokeWidth="3" />
      <circle cx="228" cy="116" r="24" fill="white" stroke="var(--accent)" strokeWidth="3" />

      <path d="M108 214c0-28.7 23.3-52 52-52s52 23.3 52 52" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="3" />
      <path d="M56 216c0-20.99 17.01-38 38-38 14.3 0 26.75 7.89 33.27 19.56" fill="white" stroke="var(--secondary)" strokeWidth="3" />
      <path d="M194.73 197.56C201.25 185.89 213.7 178 228 178c20.99 0 38 17.01 38 38" fill="white" stroke="var(--accent)" strokeWidth="3" />

      <circle cx="160" cy="86" r="8" fill="var(--accent)" opacity="0.28" />
      <circle cx="92" cy="116" r="6" fill="var(--primary)" opacity="0.24" />
      <circle cx="228" cy="116" r="6" fill="var(--accent)" opacity="0.2" />

      <rect x="104" y="226" width="112" height="14" rx="7" fill="var(--secondary)" opacity="0.16" />
    </svg>
  );
}
