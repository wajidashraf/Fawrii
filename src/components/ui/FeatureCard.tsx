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
        "flex flex-col rounded-xl border border-border bg-surface-card p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200",
        className
      )}
    >
      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-foreground-muted text-[15px] mb-3 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-1.5 mb-3 flex-1">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start text-foreground-muted text-[15px]"
          >
            <span
              aria-hidden="true"
              className="mr-2 mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
            />
            {feature}
          </li>
        ))}
      </ul>
      {note && (
        <p className="text-sm text-foreground-subtle italic border-t border-border-light pt-3">{note}</p>
      )}
    </div>
  );
}
