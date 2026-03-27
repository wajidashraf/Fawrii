import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
}

/**
 * Subtle dot grid pattern overlay.
 * Pure CSS via background-image. Place inside a `relative` parent.
 */
export function DotPattern({ className }: DotPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 pointer-events-none opacity-[0.04]",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
  );
}
