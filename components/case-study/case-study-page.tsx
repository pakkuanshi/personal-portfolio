"use client";

import { CaseStudySection } from "@/components/case-study/case-study-section";
import { Button } from "@/components/ui/button";
import { usePreferences } from "@/components/preferences/preferences-provider";
import { dictionary } from "@/lib/i18n";
import { getProjectCopy } from "@/lib/project-copy";
import type { Project } from "@/types/project";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CaseStudyPageProps = {
  project: Project;
  nextProject: Project | null;
};

export function CaseStudyPage({ project, nextProject }: CaseStudyPageProps) {
  const { locale } = usePreferences();
  const t = dictionary[locale].caseStudy;
  const copy = getProjectCopy(project, locale);
  const nextCopy = nextProject ? getProjectCopy(nextProject, locale) : null;

  const overviewItems = [
    { label: t.overview.category, value: copy.category },
    { label: t.overview.year, value: project.year },
    { label: t.overview.role, value: copy.role },
    { label: t.overview.tools, value: copy.tools.join(", ") },
  ];

  return (
    <>
      <header className="site-container grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
        <div>
          <p className="eyebrow">
            {copy.category} / {project.year}
          </p>
          <h1 className="heading-display mt-5 max-w-5xl">{copy.title}</h1>
          <p className="body-large mt-6 max-w-2xl">
            {copy.shortDescription}
          </p>
        </div>

        <div className="self-end rounded-lg border border-border bg-card p-6">
          <p className="eyebrow">{t.tags}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {copy.tags.map((tag) => (
              <span
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="site-container pb-14 md:pb-20">
        <div
          aria-label={project.coverImage.alt}
          className="flex aspect-[16/9] min-h-72 items-end rounded-lg border border-border bg-secondary p-6 md:p-8"
          role="img"
        >
          <div>
            <p className="eyebrow">{copy.category}</p>
            <p className="mt-3 max-w-xl font-serif text-3xl leading-tight">
              {t.coverPlaceholder}
            </p>
          </div>
        </div>
      </section>

      <section className="site-container pb-14 md:pb-20">
        <dl className="grid overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
          {overviewItems.map((item) => (
            <div className="bg-background p-5" key={item.label}>
              <dt className="eyebrow">{item.label}</dt>
              <dd className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <CaseStudySection
        eyebrow={t.sections.challenge[0]}
        title={t.sections.challenge[1]}
      >
        <p>{copy.challenge}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow={t.sections.insight[0]} title={t.sections.insight[1]}>
        <p>{copy.insight}</p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t.sections.strategy[0]}
        title={t.sections.strategy[1]}
      >
        <p>{copy.strategy}</p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t.sections.execution[0]}
        title={t.sections.execution[1]}
      >
        <p>{copy.execution}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow={t.sections.outcome[0]} title={t.sections.outcome[1]}>
        <p>{copy.impact}</p>
      </CaseStudySection>

      {nextProject && nextCopy ? (
        <nav className="site-container section-y" aria-label={t.nextProject}>
          <div className="grid gap-8 border-t border-border pt-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow">{t.nextProject}</p>
              <h2 className="heading-section mt-4 max-w-3xl">
                {nextCopy.title}
              </h2>
              <p className="body-large mt-5 max-w-2xl">
                {nextCopy.shortDescription}
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href={`/projects/${nextProject.slug}`}>
                {t.viewCaseStudy}
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </>
  );
}
