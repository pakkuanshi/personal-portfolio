"use client";

import Link from "next/link";

import { experienceIndexContent } from "@/content/experience-index";
import { experienceProjects } from "@/content/projects";
import { usePreferences } from "@/components/preferences/preferences-provider";
import type { Locale } from "@/types/preferences";

type ArchiveDetailPageProps = {
  kind: "professional" | "projects";
  slug: string;
};

function getSlugFromHref(href: string) {
  return href.split("/").filter(Boolean).at(-1);
}

function getLocalizedValue(value: Record<Locale, string>, locale: Locale) {
  return value[locale] || value.en;
}

function getProfessionalImage(id: string, image?: string) {
  const enhancedImages: Record<string, string> = {
    publicis: "/images/experiences/publicis-groupe-enhanced.png",
    yicai: "/images/experiences/yicai-logo-enhanced.png",
  };

  return enhancedImages[id] ?? image;
}

export function ArchiveDetailPage({ kind, slug }: ArchiveDetailPageProps) {
  const { locale } = usePreferences();

  if (kind === "projects") {
    const project = experienceProjects.find(
      (item) => item.id === slug || getSlugFromHref(item.href) === slug,
    );

    if (!project) {
      return null;
    }

    const title = getLocalizedValue(project.title, locale);
    const overview = getLocalizedValue(project.overview, locale);
    const year = getLocalizedValue(project.year, locale);

    return (
      <main className="bg-[hsl(40_25%_97%)] pb-24 pt-28 text-[hsl(225_15%_12%)] transition-colors duration-300 dark:bg-[linear-gradient(180deg,hsl(25_25%_10%),hsl(20_26%_8%))] dark:text-[hsl(42_32%_91%)] md:pb-32 md:pt-32">
        <article className="site-container grid max-w-6xl gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-16 lg:gap-24">
          <div className="relative aspect-[1.24] overflow-hidden rounded-[1.05rem] border border-[hsl(34_20%_76%/0.44)] bg-[hsl(38_34%_88%)] shadow-[0_20px_56px_hsl(30_18%_20%/0.08)] dark:border-[hsl(34_24%_70%/0.18)] dark:bg-[hsl(40_27%_79%)] dark:shadow-[0_24px_64px_hsl(18_34%_4%/0.46)]">
            {project.image ? (
              <img
                alt=""
                className="h-full w-full bg-white object-contain p-12 sm:p-14"
                src={project.image}
              />
            ) : null}
          </div>

          <div>
            <Link
              className="text-[0.72rem] uppercase text-[hsl(220_10%_34%/0.58)] transition-colors hover:text-[hsl(220_12%_22%/0.78)] dark:text-[hsl(38_18%_78%/0.58)] dark:hover:text-[hsl(38_20%_86%/0.82)]"
              href="/experiences/projects"
            >
              ← {locale === "en" ? "Projects" : locale === "zh-CN" ? "项目" : "項目"}
            </Link>
            <p className="mt-9 text-[0.72rem] uppercase text-[hsl(220_10%_34%/0.58)] dark:text-[hsl(38_18%_78%/0.58)]">
              {year}
            </p>
            <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,7rem)] leading-[1.02] text-[hsl(220_18%_14%/0.9)] dark:text-[hsl(42_31%_88%/0.9)]">
              {title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[hsl(220_9%_32%/0.7)] dark:text-[hsl(38_18%_78%/0.66)]">
              {overview}
            </p>
          </div>
        </article>
      </main>
    );
  }

  const category = experienceIndexContent[locale].categories.professional;
  const item = category.items.find(
    (entry) => entry.id === slug || getSlugFromHref(entry.href) === slug,
  );

  if (!item) {
    return null;
  }

  const image = getProfessionalImage(item.id, item.image);

  return (
    <main className="bg-[hsl(40_25%_97%)] pb-24 pt-28 text-[hsl(225_15%_12%)] transition-colors duration-300 dark:bg-[linear-gradient(180deg,hsl(25_25%_10%),hsl(20_26%_8%))] dark:text-[hsl(42_32%_91%)] md:pb-32 md:pt-32">
      <article className="site-container grid max-w-6xl gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-16 lg:gap-24">
        <div className="relative aspect-[1.24] overflow-hidden rounded-[1.05rem] border border-[hsl(34_20%_76%/0.44)] bg-[hsl(38_34%_88%)] shadow-[0_20px_56px_hsl(30_18%_20%/0.08)] dark:border-[hsl(34_24%_70%/0.18)] dark:bg-[hsl(40_27%_79%)] dark:shadow-[0_24px_64px_hsl(18_34%_4%/0.46)]">
          {image ? (
            <img
              alt=""
              className="h-full w-full bg-white object-contain p-12 sm:p-14"
              src={image}
            />
          ) : null}
        </div>

        <div>
          <Link
            className="text-[0.72rem] uppercase text-[hsl(220_10%_34%/0.58)] transition-colors hover:text-[hsl(220_12%_22%/0.78)] dark:text-[hsl(38_18%_78%/0.58)] dark:hover:text-[hsl(38_20%_86%/0.82)]"
            href="/experiences/professional"
          >
            ← {category.title}
          </Link>
          <p className="mt-9 text-[0.72rem] uppercase text-[hsl(220_10%_34%/0.58)] dark:text-[hsl(38_18%_78%/0.58)]">
            {item.timePeriod}
          </p>
          <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,7rem)] leading-[1.02] text-[hsl(220_18%_14%/0.9)] dark:text-[hsl(42_31%_88%/0.9)]">
            {item.title}
          </h1>
          {item.role ? (
            <p className="mt-7 text-sm leading-6 text-[hsl(220_10%_32%/0.58)] dark:text-[hsl(38_18%_78%/0.58)] md:text-[0.95rem]">
              {item.role}
            </p>
          ) : null}
          <p className="mt-6 max-w-2xl text-base leading-8 text-[hsl(220_9%_32%/0.7)] dark:text-[hsl(38_18%_78%/0.66)]">
            {item.description}
          </p>
        </div>
      </article>
    </main>
  );
}
