import { Button } from "@/components/ui/Button";
import { directorVideoContent } from "@/content/homepage";

// TODO: Replace with real director video embed (YouTube/Vimeo ID or self-hosted URL)
const PLACEHOLDER_VIDEO_ID = "dQw4w9WgXcQ";

export function DirectorVideoSection() {
  return (
    <section aria-label="Director video" className="bg-background">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <p className="text-center text-foreground-muted text-lg mb-6">
          {directorVideoContent.introText}
        </p>

        {/* Responsive YouTube embed — replace ID with real video */}
        <div className="relative w-full overflow-hidden rounded-xl bg-foreground/5 aspect-video shadow-md">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${PLACEHOLDER_VIDEO_ID}`}
            title="A message from the Fawrii team"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-8 text-center">
          <Button href={directorVideoContent.cta.href}>
            {directorVideoContent.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
