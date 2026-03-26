import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Become a Tutor | Fawrii",
  description:
    "Apply to become a Fawrii tutor. Our application process is straightforward and designed to give you clarity.",
};

export default function BecomeTutorPage() {
  return (
    <ComingSoon
      title="Become a Tutor"
      description="Our tutor application process is being finalised and will be available soon. Check back shortly to apply."
    />
  );
}
