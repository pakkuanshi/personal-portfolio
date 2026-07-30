"use client";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { SkillCategoryGrid } from "@/components/skills/skill-category-grid";
import { skillsPreviewCopy } from "@/content/skills";

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

        <SkillCategoryGrid />
      </div>
    </section>
  );
}
