import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextCta } from "@/components/ui/TextCta";
import { payControlContent } from "@/content/homepage";

export function PayControlSection() {
  return (
    <SectionWrapper
      id="pay-control"
      background="alt"
      maxWidth="wide"
      ariaLabel="Pay, control and flexibility"
    >
      <div className="max-w-3xl">
        <SectionHeading>{payControlContent.headline}</SectionHeading>

        {/* Key statement — bold emphasis */}
        <p className="text-foreground font-semibold text-base sm:text-[17px] mb-2">
          {payControlContent.intro}
        </p>
        <p className="text-foreground-muted text-[15px] sm:text-base leading-relaxed mb-5">
          {payControlContent.subIntro}
        </p>

        {/* Bullet points in a callout card */}
        <div className="rounded-xl bg-surface border border-border p-5 sm:p-6 mb-6">
          <ul className="space-y-2.5">
            {payControlContent.bullets.map((item) => (
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

        {/* Closing — emphasized takeaway */}
        <p className="text-foreground font-semibold text-base sm:text-[17px] mb-6">
          {payControlContent.closing}
        </p>

        <TextCta href={payControlContent.cta.href}>
          {payControlContent.cta.label}
        </TextCta>
      </div>
    </SectionWrapper>
  );
}
