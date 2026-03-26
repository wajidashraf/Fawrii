import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { section4Content } from "@/content/about";

export function HowWeSeeTutorsSection() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="How we see tutors"
    >
      {/* Narrow, centred content for editorial reflective feel per brief */}
      <div className="max-w-2xl mx-auto">
        <SectionHeading className="mb-8">
          {section4Content.headline}
        </SectionHeading>

        <div className="space-y-5 mb-8">
          {section4Content.body.map((p) => (
            <p
              key={p}
              className="text-foreground-muted text-base sm:text-lg leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        <PrimaryButton href={section4Content.cta.href}>
          {section4Content.cta.label}
        </PrimaryButton>
      </div>
    </SectionWrapper>
  );
}
