import { Button } from "@/components/ui/Button";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { directorVideoContent } from "@/content/homepage";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function DirectorVideoSection() {
  return (
    <section aria-label="Director video" className="bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <MotionDiv variants={fadeInUp} repeat>
          <p className="text-center text-foreground-muted text-[15px] mb-5">
            {directorVideoContent.introText}
          </p>
        </MotionDiv>

        <MotionDiv variants={scaleIn} delay={0.1} repeat>
          <VideoEmbed />
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.2} repeat>
          <div className="mt-6 text-center">
            <Button href={directorVideoContent.cta.href}>
              {directorVideoContent.cta.label}
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
