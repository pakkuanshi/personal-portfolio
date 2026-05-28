"use client";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { skills, skillsPageCopy } from "@/content/skills";

export function SkillsPageContent() {
  const { locale } = usePreferences();
  const pageCopy = skillsPageCopy[locale];

  return (
    <div className="skills-page-shell">
      <header className="site-container section-y skills-page-intro">
        <p className="eyebrow">{pageCopy.eyebrow}</p>
        <h1 className="heading-display mt-5 max-w-5xl">{pageCopy.title}</h1>
        <p className="body-large mt-6 max-w-2xl">{pageCopy.description}</p>
      </header>

      <main className="skills-page-section">
        <div className="site-container skills-page-list">
          {skills
            .filter((skill) => skill.type === "skill")
            .map((skill) => {
              const skillCopy = skill.translations[locale];

              return (
                <section className="skills-page-card" id={skill.id} key={skill.id}>
                  <h2 className="skills-page-card-title">{skillCopy.title}</h2>
                </section>
              );
            })}
        </div>
      </main>
    </div>
  );
}
