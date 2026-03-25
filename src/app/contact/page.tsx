import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Fawrii.",
};

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact Us"
      description="Reach out to our team. Coming soon."
    />
  );
}
