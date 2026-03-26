import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextCta } from "@/components/ui/TextCta";
import { howTutorsWorkContent } from "@/content/homepage";

export function HowTutorsWorkSection() {
  return (
    <SectionWrapper
      id="how-tutors-work"
      background="default"
      maxWidth="wide"
      ariaLabel="How tutors work on Fawrii"
    >
      <div className="max-w-3xl mb-8">
        <SectionHeading>{howTutorsWorkContent.headline}</SectionHeading>
        <p className="text-foreground font-semibold text-base sm:text-[17px]">
          {howTutorsWorkContent.intro}
        </p>
      </div>

      {/* Three format cards with refined hierarchy */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {howTutorsWorkContent.formats.map((format, index) => (
          <div
            key={format.title}
            className="rounded-xl bg-background-alt border border-border p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Format number badge */}
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              {index + 1}
            </span>

            <h3 className="text-foreground font-semibold text-base sm:text-[17px] mb-2">
              {format.title}
            </h3>

            <p className="text-foreground-muted text-[15px] leading-relaxed mb-4">
              {format.description}
            </p>

            {/* Features list */}
            <ul className="space-y-2 mb-4">
              {format.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-foreground-muted text-sm leading-relaxed"
                >
<span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Note — subtle emphasis */}
            {format.note && (
              <p className="text-foreground-muted/80 text-[13px] italic border-t border-border/50 pt-3">
                {format.note}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Closing — key takeaway emphasized */}
      <div className="max-w-3xl">
        <p className="text-foreground font-semibold text-base sm:text-[17px] mb-2">
          {howTutorsWorkContent.closing[0]}
        </p>
        <div className="space-y-1.5 mb-6">
          {howTutorsWorkContent.closing.slice(1).map((line) => (
            <p
              key={line}
              className="text-foreground-muted text-[15px] sm:text-base leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>

        <TextCta href={howTutorsWorkContent.cta.href}>
          {howTutorsWorkContent.cta.label}
        </TextCta>
      </div>
    </SectionWrapper>
  );
}
