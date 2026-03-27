import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextCta } from "@/components/ui/TextCta";
import { whyFawriiContent } from "@/content/homepage";

export function WhyFawriiSection() {
  return (
    <SectionWrapper
      id="why-fawrii"
      background="alt"
      maxWidth="wide"
      ariaLabel="Why Fawrii exists"
    >
      <div className="max-w-3xl">
        <SectionHeading>{whyFawriiContent.headline}</SectionHeading>

        <p className="text-[15px] sm:text-base text-foreground-muted leading-relaxed mb-4">
          {whyFawriiContent.intro}
        </p>

        {/* Pain points — visually distinct callout */}
        <div className="rounded-xl bg-surface border border-border shadow-sm p-5 sm:p-6 mb-6">
          <ul className="space-y-2.5">
            {whyFawriiContent.painPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-foreground text-[15px] sm:text-base font-medium"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Transition statement — stands out */}
        <p className="text-foreground font-semibold text-base sm:text-[17px] mb-3">
          {whyFawriiContent.body[0]}
        </p>

        {/* Remaining body paragraphs */}
        <div className="space-y-3 mb-6">
          {whyFawriiContent.body.slice(1).map((paragraph) => (
            <p
              key={paragraph}
              className="text-foreground-muted text-[15px] sm:text-base leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <TextCta href={whyFawriiContent.cta.href}>
          {whyFawriiContent.cta.label}
        </TextCta>
      </div>
    </SectionWrapper>
  );
}
