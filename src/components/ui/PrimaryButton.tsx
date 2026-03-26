import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export function PrimaryButton({ href, children }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-hover transition-all duration-200"
    >
      {children}
    </Link>
  );
}
