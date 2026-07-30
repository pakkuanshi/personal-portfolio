"use client";

import Link from "next/link";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { skillCategories, skillsPreviewCopy } from "@/content/skills";

const posterLayouts = [
  {
    title: "items-start justify-end text-left",
    number: "left-5 top-5",
    rubric: "right-5 top-5 text-right",
    rule: "left-5 right-5 top-16",
  },
  {
    title: "items-center justify-center text-center",
    number: "right-5 top-5",
    rubric: "left-5 top-5",
    rule: "bottom-16 left-5 right-5",
  },
  {
    title: "items-start justify-start text-left",
    number: "left-5 bottom-5",
    rubric: "right-5 top-5 text-right",
    rule: "left-5 top-16 w-24",
  },
  {
    title: "items-end justify-start text-left",
    number: "right-5 bottom-5",
    rubric: "left-5 top-5",
    rule: "bottom-16 left-5 right-5",
  },
  {
    title: "items-end justify-end text-right",
    number: "left-5 top-5",
    rubric: "right-5 bottom-5 text-right",
    rule: "right-5 top-16 h-28 w-px",
  },
  {
    title: "items-center justify-start text-left",
    number: "left-1/2 top-5 -translate-x-1/2",
    rubric: "right-5 top-5 text-right",
    rule: "left-5 right-5 top-1/2",
  },
];

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

        <div className="mx-auto grid w-full max-w-[920px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const categoryCopy = category.translations[locale];
            const layout = posterLayouts[index];

            return (
              <Link
                aria-label={`Open ${categoryCopy.title} skills`}
                className="group relative aspect-square overflow-hidden border border-[hsl(34_18%_68%/0.34)] bg-[hsl(42_31%_93%/0.86)] p-5 text-[hsl(220_18%_12%/0.9)] shadow-[0_14px_34px_hsl(30_18%_28%/0.055)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[hsl(28_24%_52%/0.38)] hover:bg-[hsl(42_35%_96%/0.94)] hover:shadow-[0_18px_36px_hsl(30_18%_24%/0.11)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(28_24%_52%/0.45)] dark:border-[hsl(38_18%_58%/0.2)] dark:bg-[hsl(30_12%_16%/0.78)] dark:text-[hsl(42_28%_90%/0.9)] dark:hover:border-[hsl(38_22%_68%/0.3)] dark:hover:bg-[hsl(30_13%_19%/0.88)]"
                href={`/skills/${category.slug}`}
                key={category.slug}
              >
                <span
                  aria-hidden="true"
                  className={`absolute ${layout.rule} border-t border-[hsl(34_18%_48%/0.22)] dark:border-[hsl(38_18%_70%/0.18)]`}
                />
                <span
                  className={`absolute ${layout.number} text-xs uppercase leading-none text-[hsl(220_9%_34%/0.62)] dark:text-[hsl(42_18%_82%/0.62)]`}
                >
                  {category.number}
                </span>
                <span
                  className={`absolute ${layout.rubric} max-w-28 text-xs uppercase leading-[1.25] text-[hsl(220_9%_34%/0.62)] dark:text-[hsl(42_18%_82%/0.62)]`}
                >
                  {categoryCopy.rubric}
                </span>
                <div className={`flex h-full ${layout.title}`}>
                  <h3 className="font-serif text-[clamp(2.2rem,3.2vw,2.8rem)] font-medium leading-[0.9] tracking-normal text-balance">
                    {categoryCopy.titleLines.map((line) => (
                      <span className="block" key={line}>
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
