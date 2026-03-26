import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextCta } from "@/components/ui/TextCta";
import { trustSafeguardingContent } from "@/content/homepage";

export function TrustSafeguardingSection() {
  return (
    <SectionWrapper
      id="trust-safeguarding"
      background="default"
      maxWidth="wide"
      ariaLabel="Trust, safeguarding and support"
    >
      <div className="max-w-3xl">
        <SectionHeading>{trustSafeguardingContent.headline}</SectionHeading>

        {/* Intro — emphasized statement */}
        <p className="text-foreground font-semibold text-base sm:text-[17px] mb-5">
          {trustSafeguardingContent.intro}
        </p>

        {/* Key safeguarding points in callout card */}
        <div className="rounded-xl bg-background-alt border border-border p-5 sm:p-6 mb-6">
          <ul className="space-y-2.5 ">
            {trustSafeguardingContent.bullets.map((item) => (
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

        {/* Closing — first line is key takeaway */}
        <p className="text-foreground font-semibold text-base sm:text-[17px] mb-2">
          {trustSafeguardingContent.closing[0]}
        </p>
        <div className="space-y-1.5 mb-6">
          {trustSafeguardingContent.closing.slice(1).map((line) => (
            <p
              key={line}
              className="text-foreground-muted text-[15px] sm:text-base leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>

        <TextCta href={trustSafeguardingContent.cta.href}>
          {trustSafeguardingContent.cta.label}
        </TextCta>
      </div>
    </SectionWrapper>
  );
}
