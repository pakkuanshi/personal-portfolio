"use client";

import Link from "next/link";

import {
  type ExperienceProject,
  experienceProjects,
  projectsArchiveCopy,
} from "@/content/projects";
import { experienceIndexContent } from "@/content/experience-index";
import { usePreferences } from "@/components/preferences/preferences-provider";
import type { Locale } from "@/types/preferences";

function getLocalizedValue(
  value: Record<Locale, string>,
  locale: Locale,
) {
  return value[locale] || value.en;
}

function ProjectVisual({
  index,
  project,
  title,
}: {
  index: number;
  project: ExperienceProject;
  title: string;
}) {
  if (project.image) {
    return (
      <img
        alt=""
        className="h-full w-full bg-white object-contain p-12 transition duration-700 ease-out sm:p-14"
        src={project.image}
      />
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[hsl(38_34%_88%)] transition duration-700 ease-out dark:bg-[hsl(38_28%_80%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,hsl(38_46%_94%/0.9),transparent_38%),linear-gradient(135deg,hsl(28_26%_76%/0.24),transparent_44%),linear-gradient(180deg,hsl(42_40%_91%/0.72),hsl(34_28%_82%/0.72))]" />
      <div className="absolute left-[12%] top-[18%] h-px w-[42%] bg-[hsl(28_16%_44%/0.18)]" />
      <div className="absolute bottom-[18%] right-[10%] h-px w-[34%] bg-[hsl(28_16%_44%/0.16)]" />
      <div className="relative grid gap-8 text-center">
        <span className="font-serif text-[clamp(3.5rem,8vw,6.5rem)] leading-none text-[hsl(220_18%_15%/0.1)] dark:text-[hsl(20_16%_13%/0.16)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="mx-auto max-w-[11rem] text-[0.62rem] uppercase leading-[1.5] text-[hsl(220_10%_28%/0.52)] dark:text-[hsl(25_14%_20%/0.56)]">
          {title}
        </span>
      </div>
    </div>
  );
}

export function ProjectsArchiveContent() {
  const { locale } = usePreferences();
  const pageCopy = projectsArchiveCopy[locale];
  const experienceCopy = experienceIndexContent[locale];
  const intro = pageCopy.intro || projectsArchiveCopy.en.intro;

  return (
    <div className="bg-[hsl(40_25%_97%)] pb-24 pt-28 text-[hsl(225_15%_12%)] transition-colors duration-300 dark:bg-[linear-gradient(180deg,hsl(25_25%_10%),hsl(20_26%_8%))] dark:text-[hsl(42_32%_91%)] md:pb-32 md:pt-32">
      <header className="site-container max-w-6xl">
        <Link
          className="mb-7 inline-flex text-xs uppercase tracking-[0.16em] text-[hsl(220_9%_33%/0.58)] transition duration-200 hover:-translate-x-0.5 hover:text-[hsl(220_15%_16%/0.84)] hover:underline hover:underline-offset-4 dark:text-[hsl(38_18%_78%/0.58)] dark:hover:text-[hsl(42_32%_91%/0.88)]"
          href="/experiences"
        >
          ← {experienceCopy.backLabel}
        </Link>
        <h1 className="max-w-5xl font-serif text-[clamp(2.6rem,5.2vw,4.35rem)] font-medium leading-[1.02] tracking-normal text-balance text-[hsl(220_18%_14%/0.92)] dark:text-[hsl(42_31%_88%/0.94)]">
          {pageCopy.title}
        </h1>
        <p className="mt-7 max-w-2xl text-sm leading-7 text-[hsl(220_9%_33%/0.7)] dark:text-[hsl(38_18%_78%/0.68)] md:mt-8 md:text-base md:leading-8">
          {intro}
        </p>
      </header>

      <section
        aria-label={pageCopy.title}
        className="site-container mt-20 grid max-w-6xl gap-24 md:mt-24 md:gap-32"
      >
        {experienceProjects.map((project, index) => {
          const title = getLocalizedValue(project.title, locale);
          const overview = getLocalizedValue(project.overview, locale);
          const year = getLocalizedValue(project.year, locale);
          const imageFirst = index % 2 === 0;

          return (
            <article
              className="grid scroll-mt-28 gap-9 md:scroll-mt-32 md:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] md:items-center md:gap-14 lg:gap-20"
              id={project.id}
              key={project.id}
            >
              <div
                aria-hidden="true"
                className={`relative aspect-[1.24] overflow-hidden rounded-[1.05rem] border border-[hsl(34_20%_76%/0.44)] bg-[hsl(38_34%_88%)] shadow-[0_20px_56px_hsl(30_18%_20%/0.08)] transition duration-500 ease-out dark:border-[hsl(34_24%_70%/0.18)] dark:bg-[hsl(40_27%_79%)] dark:shadow-[0_24px_64px_hsl(18_34%_4%/0.46)] ${
                  imageFirst ? "md:order-1" : "md:order-2"
                }`}
              >
                <ProjectVisual index={index} project={project} title={title} />
              </div>

              <div
                className={`max-w-xl ${
                  imageFirst ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.68rem] uppercase leading-none text-[hsl(220_10%_34%/0.58)] dark:text-[hsl(38_18%_78%/0.58)]">
                  <span>{year}</span>
                </div>
                <h2 className="mt-5 font-serif text-[clamp(2.2rem,4vw,4.25rem)] leading-[1.08] text-[hsl(220_18%_14%/0.9)] dark:text-[hsl(42_31%_88%/0.9)]">
                  {title}
                </h2>
                <p className="mt-6 text-sm leading-7 text-[hsl(220_9%_32%/0.7)] dark:text-[hsl(38_18%_78%/0.66)] md:text-base md:leading-8">
                  {overview}
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
