import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  background?: "default" | "alt";
  maxWidth?: "narrow" | "wide" | "full";
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function SectionWrapper({
  id,
  background = "default",
  maxWidth = "narrow",
  children,
  className,
  ariaLabel,
}: SectionWrapperProps) {
  const backgrounds = {
    default: "bg-background",
    alt: "bg-background-alt",
  };

  const widths = {
    narrow: "max-w-3xl",
    wide: "max-w-[90rem]",
    full: "max-w-[90rem]",
  };

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(backgrounds[background], "py-16 md:py-24", className)}
    >
      <div className={cn(widths[maxWidth], "mx-auto px-4 sm:px-6 lg:px-8")}>
        {children}
      </div>
    </section>
  );
}
