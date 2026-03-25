import { cn } from "@/lib/utils";

interface BulletListProps {
  items: string[];
  variant?: "default" | "compact";
  className?: string;
}

export function BulletList({
  items,
  variant = "default",
  className,
}: BulletListProps) {
  return (
    <ul
      className={cn(
        variant === "default" ? "space-y-3" : "space-y-2",
        className
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start text-foreground-muted leading-relaxed"
        >
          <span
            aria-hidden="true"
            className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
