"use client";

import { SectionHeading } from "@/components/layout/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { usePreferences } from "@/components/preferences/preferences-provider";
import { featuredProjects } from "@/content/projects";
import { dictionary } from "@/lib/i18n";

export function FeaturedWorkSection() {
  const { locale } = usePreferences();
  const t = dictionary[locale].home.selectedWork;

  return (
    <section className="site-container section-y">
      <SectionHeading
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
