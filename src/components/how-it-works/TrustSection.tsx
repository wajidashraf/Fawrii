import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { trustContent } from "@/content/how-it-works";
import { MotionDiv } from "@/components/ui/motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function TrustSection() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="A platform parents and schools can trust"
    >
      <div className="max-w-3xl">
        <MotionDiv variants={fadeInUp} repeat>
          <SectionHeading>{trustContent.headline}</SectionHeading>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.1} repeat>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-2">
            {trustContent.intro}
          </p>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
            {trustContent.subIntro}
          </p>
        </MotionDiv>

        <MotionDiv variants={scaleIn} delay={0.15} repeat>
          <div className="rounded-xl bg-surface border border-border shadow-sm p-5 sm:p-6 mb-8">
            <BulletList items={trustContent.bullets} />
          </div>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} delay={0.2} repeat>
          <div className="space-y-2">
          {trustContent.closing.map((line) => (
            <p
              key={line}
              className="text-foreground-muted text-base sm:text-lg leading-relaxed"
            >
              {line}
            </p>
          ))}
          </div>
        </MotionDiv>
      </div>
    </SectionWrapper>
  );
}
