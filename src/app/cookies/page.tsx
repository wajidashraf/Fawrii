import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Cookie Policy | Fawrii",
  description: "Fawrii cookie policy — how we use cookies on our platform.",
};

export default function CookiesPage() {
  return (
    <ComingSoon
      title="Cookie Policy"
      description="Our cookie policy is being finalised and will be published here soon."
    />
  );
}
