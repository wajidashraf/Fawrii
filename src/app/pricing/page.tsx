import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing plans and rates on Fawrii.",
};

export default function PricingPage() {
  return (
    <ComingSoon
      title="Pricing"
      description="See our pricing plans and tutor rates. Coming soon."
    />
  );
}
