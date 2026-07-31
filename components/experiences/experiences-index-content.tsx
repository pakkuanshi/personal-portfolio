"use client";

import Link from "next/link";

import {
  type ExperienceCategoryKey,
  experienceIndexContent,
} from "@/content/experience-index";
import { usePreferences } from "@/components/preferences/preferences-provider";
import type { Locale } from "@/types/preferences";

type ExperiencesListContentProps = {
  categoryKey: ExperienceCategoryKey;
};

const indexCardBackgrounds = [
  "bg-[hsl(42_31%_94%/0.86)] dark:bg-[hsl(32_13%_16%/0.78)]",
  "bg-[hsl(48_24%_93%/0.84)] dark:bg-[hsl(34_12%_17%/0.78)]",
];

const indexCardLabels: Record<Locale, Record<ExperienceCategoryKey, string>> = {
  en: {
    professional: "Professional",
    projects: "Projects",
  },
  "zh-CN": {
    professional: "专业经历",
    projects: "项目",
  },
  "zh-TW": {
    professional: "專業經歷",
    projects: "項目",
  },
};

export function ExperiencesIndexContent() {
  const { locale } = usePreferences();
  const copy = experienceIndexContent[locale];
  const professional = copy.categories.professional;
  const projects = copy.categories.projects;
  const selectors = [professional, projects];

  return (
    <div className="min-h-[calc(100vh-3.25rem)] bg-[hsl(40_25%_97%)] pt-28 pb-20 transition-colors duration-300 dark:bg-[linear-gradient(180deg,hsl(25_25%_10%),hsl(20_26%_8%))] md:pt-32 md:pb-24">
      <header className="site-container">
        <h1 className="experience-polaroid-title">
          {copy.eyebrow}
        </h1>
      </header>

      <section
        aria-label={copy.eyebrow}
        className="site-container mt-8 sm:mt-10 lg:mt-12"
      >
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {selectors.map((selector, index) => {
            const titleLines =
              locale === "en" && selector.key === "professional"
                ? selector.title.split(" ")
                : [selector.title];
            const background =
              indexCardBackgrounds[index] ?? indexCardBackgrounds[0];
            const number = String(index + 1).padStart(2, "0");
            const label = indexCardLabels[locale][selector.key];

            return (
              <Link
                className={`group relative aspect-[1.72/1] min-h-[11.75rem] overflow-hidden border border-[hsl(34_18%_68%/0.34)] p-6 text-[hsl(220_18%_12%/0.9)] transition-colors duration-200 ease-out sm:aspect-[1.85/1] md:min-h-[15rem] lg:aspect-[1.92/1] lg:min-h-[16.5rem] ${background} hover:border-[hsl(28_24%_52%/0.42)] hover:bg-[hsl(42_35%_96%/0.82)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(28_24%_52%/0.45)] dark:border-[hsl(38_18%_58%/0.2)] dark:text-[hsl(42_28%_90%/0.9)] dark:hover:border-[hsl(38_22%_68%/0.32)] dark:hover:bg-[hsl(30_13%_19%/0.78)]`}
                href={selector.href}
                key={selector.key}
              >
                <span className="absolute left-6 top-6 text-xs uppercase leading-none text-[hsl(220_9%_34%/0.58)] dark:text-[hsl(42_18%_82%/0.58)]">
                  {number}
                </span>
                <span className="absolute right-6 top-6 max-w-[9rem] text-right text-xs uppercase leading-none text-[hsl(220_9%_34%/0.58)] dark:text-[hsl(42_18%_82%/0.58)]">
                  {label}
                </span>
                <h2 className="absolute bottom-6 left-6 right-16 font-serif text-[clamp(2.05rem,3.2vw,3rem)] font-medium leading-[0.94] tracking-normal text-balance">
                  {titleLines.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </h2>
                <span
                  aria-hidden="true"
                  className="absolute bottom-6 right-6 text-2xl leading-none text-[hsl(220_9%_34%/0.58)] transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-[hsl(42_18%_82%/0.58)]"
                >
                  ↗
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export function ExperiencesListContent({
  categoryKey,
}: ExperiencesListContentProps) {
  const { locale } = usePreferences();
  const copy = experienceIndexContent[locale];
  const category = copy.categories[categoryKey];

  return (
    <div className="experience-index-page">
      <header className="site-container experience-list-hero">
        <Link className="experience-list-back" href="/experiences">
          ← {copy.backLabel}
        </Link>
        <p className="experience-index-eyebrow">{copy.eyebrow}</p>
        <h1 className="experience-index-title">{category.title}</h1>
        <p className="experience-index-subtitle">{category.subtitle}</p>
      </header>

      <section className="site-container experience-list" aria-label={category.title}>
        {category.items.map((item, index) => (
          <article className="experience-list-item" key={item.id}>
            <div className="experience-list-index">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="experience-list-media" aria-hidden="true">
              {item.image ? (
                <img alt="" className="experience-list-image" src={item.image} />
              ) : (
                <div className="experience-list-placeholder" />
              )}
            </div>

            <div className="experience-list-copy">
              <h2 className="experience-list-title">{item.title}</h2>
              <p className="experience-list-role">
                {item.role ?? item.type}
              </p>
              <dl className="experience-list-meta">
                {item.location ? (
                  <div>
                    <dt>{copy.locationLabel}</dt>
                    <dd>{item.location}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>{copy.timeLabel}</dt>
                  <dd>{item.timePeriod}</dd>
                </div>
              </dl>
              <p className="experience-list-description">{item.description}</p>
            </div>

            <Link className="experience-list-link" href={item.href}>
              {copy.futureDetailLabel}
              <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
