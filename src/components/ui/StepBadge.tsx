interface StepBadgeProps {
  step: number;
}

export function StepBadge({ step }: StepBadgeProps) {
  return (
    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-semibold">
      {step}
    </span>
  );
}
