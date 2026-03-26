import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextCta } from "@/components/ui/TextCta";
import { whoFawriiIsForContent } from "@/content/homepage";

export function WhoFawriiIsForSection() {
  return (
    <SectionWrapper
      id="who-fawrii-is-for"
      background="alt"
      maxWidth="wide"
      ariaLabel="Who Fawrii is built for"
    >
      <div className="max-w-3xl">
        <SectionHeading>{whoFawriiIsForContent.headline}</SectionHeading>

        {/* Intro — bold key statement */}
        <p className="text-foreground font-semibold text-base sm:text-[17px] mb-2">
          {whoFawriiIsForContent.intro}
        </p>
        <p className="text-foreground-muted text-[15px] sm:text-base leading-relaxed mb-5">
          {whoFawriiIsForContent.subIntro}
        </p>

        {/* Values in a callout card */}
        <div className="rounded-xl bg-surface border border-border p-5 sm:p-6 mb-6">
          <ul className="space-y-2.5">
            {whoFawriiIsForContent.bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-foreground text-[15px] sm:text-base leading-relaxed"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Closing — first line is the differentiator */}
        <p className="text-foreground font-semibold text-base sm:text-[17px] mb-2">
          {whoFawriiIsForContent.closing[0]}
        </p>
        <div className="space-y-1.5 mb-6">
          {whoFawriiIsForContent.closing.slice(1).map((line) => (
            <p
              key={line}
              className="text-foreground-muted text-[15px] sm:text-base leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>

        <TextCta href={whoFawriiIsForContent.cta.href}>
          {whoFawriiIsForContent.cta.label}
        </TextCta>
      </div>
    </SectionWrapper>
  );
}
