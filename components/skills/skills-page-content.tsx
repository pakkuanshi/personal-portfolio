"use client";

import Link from "next/link";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { skillCategories, skillsPageCopy } from "@/content/skills";

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
        <div className="skills-page-poster-grid">
          {skillCategories.map((category) => {
            const copy = category.translations[locale];

            return (
              <Link
                aria-label={`Open ${copy.title} skills`}
                className={`skills-poster ${category.posterClassName}`}
                href={`/skills/${category.slug}`}
                key={category.slug}
              >
                <span className="skills-poster-number">{category.number}</span>
                <span className="skills-poster-rubric">{copy.rubric}</span>
                <h2 className="skills-poster-title">
                  {copy.titleLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h2>
                <p className="skills-poster-note">{copy.note}</p>
                <span className="skills-poster-folio">{copy.folio}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
