import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Dispute Handling & Support | Fawrii",
  description:
    "How Fawrii handles disputes and provides support to tutors and families.",
};

export default function DisputesPage() {
  return (
    <ComingSoon
      title="Dispute Handling & Support"
      description="Our dispute handling and resolution page is being prepared and will be available soon."
    />
  );
}
