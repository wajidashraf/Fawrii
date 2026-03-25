import { cn } from "@/lib/utils";

interface VideoEmbedProps {
  src: string;
  poster?: string;
  title: string;
  className?: string;
}

export function VideoEmbed({ src, poster, title, className }: VideoEmbedProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-foreground/5 aspect-video",
        className
      )}
    >
      <video
        className="h-full w-full object-cover"
        controls
        preload="metadata"
        poster={poster}
        title={title}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
