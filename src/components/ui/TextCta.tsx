import Link from "next/link";
import { cn } from "@/lib/utils";

interface TextCtaProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TextCta({ href, children, className }: TextCtaProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center text-primary hover:text-primary-hover underline-offset-4 hover:underline transition-colors duration-200 font-medium",
        className
      )}
    >
      {children}
      <span aria-hidden="true" className="ml-1">
        →
      </span>
    </Link>
  );
}
