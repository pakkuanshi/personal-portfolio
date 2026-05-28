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
        className="site-container mt-12 grid max-w-3xl gap-7 sm:mt-14 md:grid-cols-2 md:gap-10 lg:mt-16 lg:gap-12"
      >
        {selectors.map((selector) => {
          const titleLines =
            locale === "en" && selector.key === "professional"
              ? selector.title.split(" ")
              : [selector.title];

          return (
            <Link
              className="group relative flex aspect-[0.74] min-h-[280px] items-center justify-center overflow-hidden rounded-[1.05rem] border border-[hsl(34_22%_73%/0.5)] bg-[hsl(38_38%_90%)] px-7 shadow-[0_18px_44px_hsl(30_18%_20%/0.09)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[hsl(32_24%_56%/0.58)] hover:bg-[hsl(37_41%_87%)] hover:shadow-[0_24px_54px_hsl(30_18%_18%/0.13)] dark:border-[hsl(34_24%_70%/0.2)] dark:bg-[hsl(40_27%_79%)] dark:shadow-[0_24px_58px_hsl(18_34%_4%/0.45)] dark:hover:border-[hsl(36_32%_75%/0.42)] dark:hover:bg-[hsl(40_30%_82%)] dark:hover:shadow-[0_28px_68px_hsl(18_38%_4%/0.58)] sm:min-h-[310px] md:min-h-[340px] lg:min-h-[390px]"
              href={selector.href}
              key={selector.key}
            >
              <span className="sr-only">{selector.title}</span>
              <span
                aria-hidden="true"
                className="flex flex-col items-center text-center font-serif text-[clamp(1.35rem,2.45vw,2.3rem)] leading-[1.12] text-[hsl(220_18%_16%/0.86)] transition-colors duration-300 group-hover:text-[hsl(220_18%_10%)] dark:text-[hsl(27_20%_16%/0.9)] dark:group-hover:text-[hsl(25_22%_10%)]"
              >
                {titleLines.map((line) => (
                  <span className="whitespace-nowrap" key={line}>
                    {line}
                  </span>
                ))}
              </span>
            </Link>
          );
        })}
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
