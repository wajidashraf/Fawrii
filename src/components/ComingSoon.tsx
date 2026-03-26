interface ComingSoonProps {
  title: string;
  description?: string;
}

/**
 * Reusable Coming Soon component for pages under development.
 * Use this to wrap the main content area in any page that's not ready yet.
 */
export function ComingSoon({ description }: ComingSoonProps) {
  return (
    <main className="bg-background min-h-[calc(100vh-theme(spacing.16)-theme(spacing.48))] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-3">
          Coming Soon
        </h1>
        <p className="text-foreground-muted text-base sm:text-lg">
          {description || "This page is under development. Please check back soon."}
        </p>
      </div>
    </main>
  );
}
