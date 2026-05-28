import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

type NextProjectNavProps = {
  project: Project | null;
};

export function NextProjectNav({ project }: NextProjectNavProps) {
  if (!project) {
    return null;
  }

  return (
    <nav className="site-container section-y" aria-label="Next project">
      <div className="grid gap-8 border-t border-border pt-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow">Next Project</p>
          <h2 className="heading-section mt-4 max-w-3xl">{project.title}</h2>
          <p className="body-large mt-5 max-w-2xl">
            {project.shortDescription}
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href={`/projects/${project.slug}`}>
            View case study
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </Button>
      </div>
    </nav>
  );
}
