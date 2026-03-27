export function BadgeIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="150" cy="124" r="106" fill="var(--primary)" opacity="0.05" />
      <circle cx="150" cy="124" r="66" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="3" />
      <circle cx="150" cy="124" r="46" fill="white" stroke="var(--border)" strokeWidth="2" />

      <path
        d="m149.5 92 9.43 19.11 21.09 3.06-15.26 14.87 3.6 21.01-18.86-9.92-18.86 9.92 3.6-21.01-15.26-14.87 21.09-3.06L149.5 92Z"
        fill="var(--accent)"
        opacity="0.88"
      />

      <path d="M124 184h22l-14 84-24-24-20 16 16-76h20Z" fill="var(--secondary)" opacity="0.78" />
      <path d="M176 184h-22l14 84 24-24 20 16-16-76h-20Z" fill="var(--primary)" opacity="0.82" />

      <circle cx="78" cy="62" r="7" fill="var(--accent)" opacity="0.35" />
      <circle cx="226" cy="70" r="6" fill="var(--primary)" opacity="0.3" />
      <path d="M58 144h16M66 136v16" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
      <path d="M226 40h16M234 32v16" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
