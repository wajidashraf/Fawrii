import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { directorVideoIntro } from "@/content/tutoring-on-fawrii";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function DirectorVideoSection() {
  return (
    <section aria-label="Director video" className="bg-background-alt py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-foreground-subtle mb-6">
          {directorVideoIntro}
        </p>
        <MotionDiv variants={scaleIn} delay={0.1}>

        <VideoEmbed title="A short message from the team behind Fawrii" />
          </MotionDiv>
      </div>
    </section>
  );
}
