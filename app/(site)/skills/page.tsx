import type { Metadata } from "next";

import { SkillsPageContent } from "@/components/skills/skills-page-content";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "A poster index of the six skill categories behind Kristy Shi's marketing, analytics, growth, strategy, technical, and creative work.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Skills",
    description:
      "A poster index of the six skill categories behind Kristy Shi's marketing, analytics, growth, strategy, technical, and creative work.",
    url: "/skills",
    siteName: "Kristy Shi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Skills",
    description:
      "A poster index of the six skill categories behind Kristy Shi's marketing, analytics, growth, strategy, technical, and creative work.",
  },
};

export default function SkillsPage() {
  return <SkillsPageContent />;
}
