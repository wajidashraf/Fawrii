import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
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
      <SectionHeading>{payControlContent.headline}</SectionHeading>

      <p className="text-foreground text-lg font-medium leading-relaxed mb-2">
        {payControlContent.intro}
      </p>
      <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
        {payControlContent.subIntro}
      </p>

      <BulletList items={payControlContent.bullets} className="mb-8" />

      <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-8">
        {payControlContent.closing}
      </p>

      <TextCta href={payControlContent.cta.href}>
        {payControlContent.cta.label}
      </TextCta>
    </SectionWrapper>
  );
}
