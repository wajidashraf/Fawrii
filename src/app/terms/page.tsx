import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Terms of Service | Fawrii",
  description: "Fawrii terms of service for tutors and users of the platform.",
};

export default function TermsPage() {
  return (
    <ComingSoon
      title="Terms of Service"
      description="Our terms of service are being finalised and will be published here soon."
    />
  );
}
