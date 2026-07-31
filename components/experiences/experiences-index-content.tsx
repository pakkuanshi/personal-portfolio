"use client";

import Link from "next/link";

import {
  type ExperienceCategoryKey,
  experienceIndexContent,
} from "@/content/experience-index";
import { usePreferences } from "@/components/preferences/preferences-provider";

type ExperiencesListContentProps = {
  categoryKey: ExperienceCategoryKey;
};

const indexCardBackgrounds = [
  "bg-[hsl(42_33%_94%/0.92)] dark:bg-[hsl(32_13%_16%/0.84)]",
  "bg-[hsl(48_25%_92%/0.9)] dark:bg-[hsl(34_12%_17%/0.84)]",
];

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
        className="site-container mt-12 sm:mt-14 lg:mt-16"
      >
        <div className="mx-auto grid w-full max-w-[592px] grid-cols-1 gap-4 sm:grid-cols-2">
          {selectors.map((selector, index) => {
            const titleLines =
              locale === "en" && selector.key === "professional"
                ? selector.title.split(" ")
                : [selector.title];
            const background =
              indexCardBackgrounds[index] ?? indexCardBackgrounds[0];

            return (
              <Link
                className={`group relative min-h-[13.25rem] overflow-hidden border border-[hsl(34_18%_68%/0.34)] p-6 text-[hsl(220_18%_12%/0.9)] shadow-[0_12px_28px_hsl(30_18%_28%/0.045)] transition duration-200 ease-out sm:aspect-[1.16/1] sm:min-h-0 lg:aspect-[1.22/1] ${background} hover:-translate-y-1 hover:border-[hsl(28_24%_52%/0.4)] hover:shadow-[0_18px_34px_hsl(30_18%_24%/0.1)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(28_24%_52%/0.45)] dark:border-[hsl(38_18%_58%/0.2)] dark:text-[hsl(42_28%_90%/0.9)] dark:hover:border-[hsl(38_22%_68%/0.3)] dark:hover:shadow-[0_18px_34px_hsl(24_12%_4%/0.26)]`}
                href={selector.href}
                key={selector.key}
              >
                <h2 className="absolute bottom-6 left-6 right-8 font-serif text-[clamp(2.05rem,2.35vw,2.45rem)] font-medium leading-[0.94] tracking-normal text-balance">
                  {titleLines.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </h2>
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
