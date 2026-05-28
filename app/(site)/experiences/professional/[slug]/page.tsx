import { notFound } from "next/navigation";

import { ArchiveDetailPage } from "@/components/experiences/archive-detail-page";
import { experienceIndexContent } from "@/content/experience-index";

type ProfessionalDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getSlugFromHref(href: string) {
  return href.split("/").filter(Boolean).at(-1);
}

const professionalItems =
  experienceIndexContent.en.categories.professional.items;

export function generateStaticParams() {
  return professionalItems.map((item) => ({
    slug: getSlugFromHref(item.href) ?? item.id,
  }));
}

export default async function ProfessionalDetailPage({
  params,
}: ProfessionalDetailPageProps) {
  const { slug } = await params;
  const item = professionalItems.find(
    (entry) => entry.id === slug || getSlugFromHref(entry.href) === slug,
  );

  if (!item) {
    notFound();
  }

  return <ArchiveDetailPage kind="professional" slug={slug} />;
}
