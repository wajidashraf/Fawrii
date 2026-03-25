import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  note?: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  features,
  note,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border border-border bg-surface p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200",
        className
      )}
    >
      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-foreground-muted mb-4 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2 mb-4 flex-1">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start text-foreground-muted"
          >
            <span
              aria-hidden="true"
              className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
            />
            {feature}
          </li>
        ))}
      </ul>
      {note && (
        <p className="text-sm text-foreground-subtle italic">{note}</p>
      )}
    </div>
  );
}
