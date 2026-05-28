"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { usePreferences } from "@/components/preferences/preferences-provider";
import type { Project } from "@/types/project";
import { getProjectCopy } from "@/lib/project-copy";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { locale } = usePreferences();
  const copy = getProjectCopy(project, locale);

  return (
    <Link
      className={cn(
        "group grid min-h-80 rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/30 md:p-8",
        className,
      )}
      href={`/projects/${project.slug}`}
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="eyebrow">
            {copy.category} / {project.year}
          </p>
          <h3 className="mt-4 font-serif text-3xl leading-tight">
            {copy.title}
          </h3>
        </div>
        <span className="shrink-0 rounded-full border border-border p-2 transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
          <ArrowUpRight aria-hidden="true" size={18} />
        </span>
      </div>

      <p className="mt-6 max-w-xl self-end text-sm leading-6 text-muted-foreground">
        {copy.shortDescription}
      </p>

    </Link>
  );
}
