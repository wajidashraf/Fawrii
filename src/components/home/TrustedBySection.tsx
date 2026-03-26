import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trustedByContent } from "@/content/homepage";

export function TrustedBySection() {
  return (
    <SectionWrapper
      id="trusted-by"
      background="default"
      maxWidth="wide"
      ariaLabel="Trusted by parents and schools"
      className="py-10 md:py-14"
    >
      <div className="max-w-3xl">
        <SectionHeading>{trustedByContent.headline}</SectionHeading>

        {/* Intro — bold statement */}
        <p className="text-foreground font-semibold text-base sm:text-[17px] mb-2">
          {trustedByContent.intro}
        </p>
        <p className="text-foreground-muted text-[15px] sm:text-base leading-relaxed mb-5">
          {trustedByContent.subIntro}
        </p>

        {/* Trust signals — compact list in callout card */}
        <div className="rounded-xl bg-background-alt border border-border p-5 sm:p-6 mb-6">
          <ul className="space-y-2.5">
            {trustedByContent.bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-foreground-muted text-[15px] sm:text-base leading-relaxed"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Closing — reassurance */}
        <p className="text-foreground-muted text-[15px] sm:text-base leading-relaxed">
          {trustedByContent.closing}
        </p>
      </div>

      {/* No CTA — intentional per brief */}
    </SectionWrapper>
  );
}
