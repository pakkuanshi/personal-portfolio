"use client";

import { PageIntro } from "@/components/layout/page-intro";
import { usePreferences } from "@/components/preferences/preferences-provider";
import { ProjectCard } from "@/components/projects/project-card";
import { projects, projectsIndexCopy } from "@/content/projects";

export function ProjectsIndex() {
  const { locale } = usePreferences();
  const copy = projectsIndexCopy[locale];

  return (
    <>
      <PageIntro
        description={copy.description}
        eyebrow={copy.eyebrow}
        title={copy.title}
      />

      <section className="site-container pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
