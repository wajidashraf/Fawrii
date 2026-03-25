import { Button } from "@/components/ui/Button";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { directorVideoContent } from "@/content/homepage";

export function DirectorVideoSection() {
  return (
    <section aria-label="Director video" className="bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <p className="text-center text-foreground-muted text-lg mb-6">
          {directorVideoContent.introText}
        </p>

        <VideoEmbed />

        <div className="mt-8 text-center">
          <Button href={directorVideoContent.cta.href}>
            {directorVideoContent.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
