import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { trustContent } from "@/content/how-it-works";

export function TrustSection() {
  return (
    <SectionWrapper
      background="alt"
      maxWidth="wide"
      ariaLabel="A platform parents and schools can trust"
    >
      <div className="max-w-3xl">
        <SectionHeading>{trustContent.headline}</SectionHeading>

        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-2">
          {trustContent.intro}
        </p>
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
          {trustContent.subIntro}
        </p>

        <BulletList
          items={trustContent.bullets}
          className="space-y-3 mb-8"
        />

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
      </div>
    </SectionWrapper>
  );
}
