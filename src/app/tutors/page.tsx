import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Find a Tutor",
  description: "Find and connect with qualified tutors on Fawrii.",
};

export default function TutorsPage() {
  return (
    <ComingSoon
      title="Find a Tutor"
      description="Browse and connect with qualified tutors. Coming soon."
    />
  );
}
