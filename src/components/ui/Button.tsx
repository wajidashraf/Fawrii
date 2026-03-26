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
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const variants = {
    primary:
      "bg-primary text-white rounded-lg hover:bg-primary-hover",
    secondary:
      "text-primary hover:text-primary-hover underline-offset-4 hover:underline",
  };

  /* 10% smaller: default was px-6/py-3, lg was px-8/py-4 */
  const sizes = {
    default: variant === "primary" ? "px-5 py-2.5 text-[15px]" : "text-[15px]",
    lg: variant === "primary" ? "px-7 py-3 text-base" : "text-base",
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
