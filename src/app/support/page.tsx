import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Support & Help | Fawrii",
  description:
    "Get help and support as a Fawrii tutor. We are here to assist you.",
};

export default function SupportPage() {
  return (
    <ComingSoon
      title="Support & Help"
      description="Our support and help centre is being set up and will be available soon."
    />
  );
}
