import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Privacy Policy | Fawrii",
  description: "Fawrii privacy policy — how we handle and protect your data.",
};

export default function PrivacyPage() {
  return (
    <ComingSoon
      title="Privacy Policy"
      description="Our privacy policy is being finalised and will be published here soon."
    />
  );
}
