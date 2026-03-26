import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { directorVideoIntro } from "@/content/about";

export function DirectorVideoSection() {
  return (
    <section aria-label="Director video" className="bg-background-alt py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-foreground-subtle mb-6">
          {directorVideoIntro}
        </p>
        <VideoEmbed title="A message from the people behind Fawrii" />
      </div>
    </section>
  );
}
