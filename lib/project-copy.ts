import type { Locale } from "@/types/preferences";
import type { Project, ProjectLocalizedFields } from "@/types/project";

export function getProjectCopy(
  project: Project,
  locale: Locale,
): ProjectLocalizedFields {
  return {
    title: project.translations?.[locale]?.title ?? project.title,
    shortDescription:
      project.translations?.[locale]?.shortDescription ?? project.shortDescription,
    category: project.translations?.[locale]?.category ?? project.category,
    role: project.translations?.[locale]?.role ?? project.role,
    tools: project.translations?.[locale]?.tools ?? project.tools,
    tags: project.translations?.[locale]?.tags ?? project.tags,
    challenge: project.translations?.[locale]?.challenge ?? project.challenge,
    insight: project.translations?.[locale]?.insight ?? project.insight,
    strategy: project.translations?.[locale]?.strategy ?? project.strategy,
    execution: project.translations?.[locale]?.execution ?? project.execution,
    impact: project.translations?.[locale]?.impact ?? project.impact,
  };
}
