import Image from "next/image";

import type { Project } from "@/types/project";

type ProjectCoverProps = {
  project: Project;
};

export function ProjectCover({ project }: ProjectCoverProps) {
  return (
    <section className="site-container pb-14 md:pb-20">
      <div
        aria-label={project.coverImage.alt}
        className="relative flex aspect-[16/9] min-h-72 items-end overflow-hidden rounded-lg border border-border bg-secondary p-6 md:p-8"
        role="img"
      >
        {project.coverImage.src ? (
          <Image
            alt={project.coverImage.alt}
            className="object-cover"
            fill
            sizes="(min-width: 1180px) 1180px, 100vw"
            src={project.coverImage.src}
          />
        ) : (
          <div>
            <p className="eyebrow">{project.category}</p>
            <p className="mt-3 max-w-xl font-serif text-3xl leading-tight">
              Cover image placeholder
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
