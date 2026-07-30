import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SkillDetailPageContent } from "@/components/skills/skill-detail-page-content";
import { getSkillCategory, skillCategories } from "@/content/skills";

type SkillDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return skillCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: SkillDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getSkillCategory(slug);

  if (!category) {
    return {
      title: "Skills",
    };
  }

  const copy = category.translations.en;

  return {
    title: `${copy.title} Skills`,
    description: copy.summary,
    alternates: {
      canonical: `/skills/${category.slug}`,
    },
    openGraph: {
      title: `${copy.title} Skills`,
      description: copy.summary,
      url: `/skills/${category.slug}`,
      siteName: "Kristy Shi",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${copy.title} Skills`,
      description: copy.summary,
    },
  };
}

export default async function SkillDetailPage({ params }: SkillDetailPageProps) {
  const { slug } = await params;
  const category = getSkillCategory(slug);

  if (!category) {
    notFound();
  }

  return <SkillDetailPageContent slug={category.slug} />;
}
