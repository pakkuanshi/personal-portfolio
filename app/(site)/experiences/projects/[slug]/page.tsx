import { notFound } from "next/navigation";

import { ArchiveDetailPage } from "@/components/experiences/archive-detail-page";
import { experienceProjects } from "@/content/projects";

type ExperienceProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getSlugFromHref(href: string) {
  return href.split("/").filter(Boolean).at(-1);
}

export function generateStaticParams() {
  return experienceProjects.map((project) => ({
    slug: getSlugFromHref(project.href) ?? project.id,
  }));
}

export default async function ExperienceProjectDetailPage({
  params,
}: ExperienceProjectDetailPageProps) {
  const { slug } = await params;
  const project = experienceProjects.find(
    (item) => item.id === slug || getSlugFromHref(item.href) === slug,
  );

  if (!project) {
    notFound();
  }

  return <ArchiveDetailPage kind="projects" slug={slug} />;
}
