interface TickListProps {
  items: string[];
}

export function TickList({ items }: TickListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 items-start">
          <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--warning)' }}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="text-foreground-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}
