import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Platform Rules | Fawrii",
  description:
    "Clear rules and expectations for tutors working on the Fawrii platform.",
};

export default function RulesPage() {
  return (
    <ComingSoon
      title="Platform Rules"
      description="Our platform rules and expectations page is being prepared and will be available soon."
    />
  );
}
