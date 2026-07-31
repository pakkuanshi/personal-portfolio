"use client";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { SkillCategoryGrid } from "@/components/skills/skill-category-grid";
import { skillsPageCopy } from "@/content/skills";

export function SkillsPageContent() {
  const { locale } = usePreferences();
  const pageCopy = skillsPageCopy[locale];

  return (
    <div className="min-h-[calc(100vh-3.25rem)] bg-[hsl(40_25%_97%)] pb-20 pt-28 transition-colors duration-300 dark:bg-[linear-gradient(180deg,hsl(25_25%_10%),hsl(20_26%_8%))] md:pb-24 md:pt-32">
      <header className="site-container">
        <h1 className="experience-polaroid-title">
          {pageCopy.eyebrow}
        </h1>
      </header>

      <section
        aria-label={pageCopy.eyebrow}
        className="site-container mt-12 sm:mt-14 lg:mt-16"
      >
        <SkillCategoryGrid />
      </section>
    </div>
  );
}
