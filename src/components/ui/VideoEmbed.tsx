import { cn } from "@/lib/utils";

/** Default Fawrii director video — change once to update everywhere. */
const DEFAULT_VIDEO_ID = "p-kAI-qOeJA";

interface VideoEmbedProps {
  /** YouTube video ID. Falls back to the default Fawrii director video. */
  videoId?: string;
  /** Accessible title for the iframe. */
  title?: string;
  /** Additional wrapper classes. */
  className?: string;
}

/**
 * Reusable responsive YouTube video embed.
 *
 * Usage:
 *   <VideoEmbed />                          — default video
 *   <VideoEmbed videoId="abc123" />          — custom video
 *   <VideoEmbed title="Welcome message" />   — custom title
 */
export function VideoEmbed({
  videoId = DEFAULT_VIDEO_ID,
  title = "A message from the Fawrii team",
  className,
}: VideoEmbedProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-foreground/5 aspect-video shadow-md",
        className
      )}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
