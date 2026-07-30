"use client";

import Link from "next/link";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { skillCategories, skillsPreviewCopy } from "@/content/skills";

const posterBackgrounds = [
  "bg-[hsl(42_33%_94%/0.92)] dark:bg-[hsl(32_13%_16%/0.84)]",
  "bg-[hsl(48_25%_92%/0.9)] dark:bg-[hsl(34_12%_17%/0.84)]",
  "bg-[hsl(72_17%_91%/0.88)] dark:bg-[hsl(44_11%_17%/0.84)]",
  "bg-[hsl(35_33%_92%/0.9)] dark:bg-[hsl(28_12%_16%/0.84)]",
  "bg-[hsl(45_20%_92%/0.88)] dark:bg-[hsl(38_11%_17%/0.84)]",
  "bg-[hsl(20_26%_92%/0.88)] dark:bg-[hsl(24_12%_16%/0.84)]",
];

const titleOffsets = [
  "bottom-6",
  "bottom-7",
  "bottom-6",
  "bottom-7",
  "bottom-6",
  "bottom-7",
];

const fallbackPosterBackground = "bg-[hsl(42_33%_94%/0.92)] dark:bg-[hsl(32_13%_16%/0.84)]";
const fallbackTitleOffset = "bottom-6";

export function SkillsPreviewSection() {
  const { locale } = usePreferences();
  const copy = skillsPreviewCopy[locale];

  return (
    <section className="skills-preview-section" aria-labelledby="skills-preview-title">
      <div className="site-container skills-preview-inner !gap-8 !py-12 md:!py-14 lg:!py-16">
        <div className="skills-preview-heading">
          <h2 className="skills-preview-title" id="skills-preview-title">
            {copy.title}
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const categoryCopy = category.translations[locale];
            const background = posterBackgrounds[index] ?? fallbackPosterBackground;
            const titleOffset = titleOffsets[index] ?? fallbackTitleOffset;

            return (
              <Link
                aria-label={
                  locale === "en"
                    ? `Open ${categoryCopy.title} skills`
                    : `查看${categoryCopy.title}技能`
                }
                className={`group relative min-h-[13.25rem] overflow-hidden border border-[hsl(34_18%_68%/0.34)] p-6 text-[hsl(220_18%_12%/0.9)] shadow-[0_12px_28px_hsl(30_18%_28%/0.045)] transition duration-200 ease-out sm:aspect-[1.16/1] sm:min-h-0 lg:aspect-[1.22/1] ${background} hover:-translate-y-1 hover:border-[hsl(28_24%_52%/0.4)] hover:shadow-[0_18px_34px_hsl(30_18%_24%/0.1)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(28_24%_52%/0.45)] dark:border-[hsl(38_18%_58%/0.2)] dark:text-[hsl(42_28%_90%/0.9)] dark:hover:border-[hsl(38_22%_68%/0.3)] dark:hover:shadow-[0_18px_34px_hsl(24_12%_4%/0.26)]`}
                href={`/skills/${category.slug}`}
                key={category.slug}
              >
                <span className="absolute left-6 top-6 text-xs uppercase leading-none text-[hsl(220_9%_34%/0.62)] dark:text-[hsl(42_18%_82%/0.62)]">
                  {category.number}
                </span>
                <span className="absolute right-6 top-6 max-w-24 text-right text-xs uppercase leading-none text-[hsl(220_9%_34%/0.62)] dark:text-[hsl(42_18%_82%/0.62)]">
                  {categoryCopy.rubric}
                </span>
                <h3
                  className={`absolute left-6 right-8 ${titleOffset} font-serif text-[clamp(2.05rem,2.35vw,2.45rem)] font-medium leading-[0.94] tracking-normal text-balance`}
                >
                  {categoryCopy.titleLines.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
