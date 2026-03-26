import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export function ComingSoon({
  title,
  description = "This page is currently being prepared and will be available soon.",
}: ComingSoonProps) {
  return (
    <main className="w-full bg-background py-16">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="inline-block text-4xl text-primary mb-12 font-bold tracking-tight">
            Coming Soon
          </h2>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-2">
            {title}
          </h1>
          <p className="text-lg text-foreground-muted leading-relaxed mb-10">
            {description}
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-md font-medium text-primary hover:text-primary-hover transition-colors" >
            <span aria-hidden="true">&larr;</span>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
