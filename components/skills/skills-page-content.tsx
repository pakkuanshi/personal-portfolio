"use client";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { SkillCategoryGrid } from "@/components/skills/skill-category-grid";
import { skillsPageCopy } from "@/content/skills";

export function SkillsPageContent() {
  const { locale } = usePreferences();
  const pageCopy = skillsPageCopy[locale];

  return (
    <div className="skills-page-shell">
      <header className="site-container skills-page-intro">
        <div className="skills-page-masthead">
          <div className="skills-page-label">
            <span>Kristy Shi</span>
            <span>{pageCopy.eyebrow}</span>
          </div>
          <div className="skills-page-copy">
            <p className="eyebrow">{pageCopy.eyebrow}</p>
            <h1>{pageCopy.title}</h1>
            <p>{pageCopy.description}</p>
          </div>
        </div>
      </header>

      <section className="site-container skills-page-section" aria-label="Skill categories">
        <SkillCategoryGrid />
      </section>
    </div>
  );
}
