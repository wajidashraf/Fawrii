import { cn } from "@/lib/utils";

interface GradientBlobProps {
  /** Color variant */
  variant?: "teal" | "accent" | "secondary";
  /** Size class (Tailwind width/height) */
  size?: string;
  /** Position classes (e.g. "top-0 right-0") */
  position?: string;
  /** Additional classes */
  className?: string;
}

const gradientMap = {
  teal: "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(22, 134, 134, 0.24) 0%, rgba(230, 247, 247, 0.18) 45%, transparent 72%)",
  accent:
    "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(255, 138, 61, 0.2) 0%, rgba(255, 244, 236, 0.14) 45%, transparent 72%)",
  secondary:
    "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(61, 122, 132, 0.18) 0%, rgba(230, 242, 254, 0.14) 45%, transparent 72%)",
};

/**
 * Decorative blurred gradient blob.
 * Pure CSS — no JS. Place inside a `relative overflow-hidden` parent.
 */
export function GradientBlob({
  variant = "teal",
  size = "w-[500px] h-[500px]",
  position = "top-0 right-0",
  className,
}: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none",
        size,
        position,
        className
      )}
      style={{ background: gradientMap[variant] }}
    />
  );
}
