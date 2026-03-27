import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 md:mb-6 leading-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}
