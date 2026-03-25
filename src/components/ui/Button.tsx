import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "default",
  href,
  children,
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const variants = {
    primary:
      "bg-primary text-white rounded-lg hover:bg-primary-hover shadow-sm hover:shadow-md transition-all duration-200",
    secondary:
      "text-primary hover:text-primary-hover underline-offset-4 hover:underline transition-colors duration-200",
  };

  const sizes = {
    default: variant === "primary" ? "px-6 py-3 text-base" : "text-base",
    lg: variant === "primary" ? "px-8 py-4 text-lg" : "text-lg",
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
