import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Subjects",
  description: "Browse tutors by subject on Fawrii.",
};

export default function SubjectsPage() {
  return (
    <ComingSoon
      title="Subjects"
      description="Browse tutors by subject on Fawrii. Coming soon."
    />
  );
}
