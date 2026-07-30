"use client";

import Link from "next/link";

import { usePreferences } from "@/components/preferences/preferences-provider";
import {
  getNextSkillCategory,
  getSkillCategory,
} from "@/content/skills";

type SkillDetailPageContentProps = {
  slug: string;
};

export function SkillDetailPageContent({ slug }: SkillDetailPageContentProps) {
  const { locale } = usePreferences();
  const category = getSkillCategory(slug);
  const nextCategory = getNextSkillCategory(slug);

  if (!category) {
    return null;
  }

  const copy = category.translations[locale];
  const nextCopy = nextCategory?.translations[locale];

  return (
    <div className="skills-detail-shell">
      <main className="site-container skills-detail-main">
        <nav className="skills-detail-nav" aria-label="Skills navigation">
          <Link href="/skills">Skills Index</Link>
          <span>{copy.detailKicker}</span>
        </nav>

        <header className="skills-detail-hero">
          <p className="skills-detail-number">{category.number}</p>
          <div>
            <p className="skills-detail-kicker">{copy.rubric}</p>
            <h1>{copy.title}</h1>
            <p className="skills-detail-summary">{copy.summary}</p>
          </div>
        </header>

        <section className="skills-detail-ledger" aria-labelledby="selected-skills">
          <div className="skills-detail-section-heading">
            <h2 id="selected-skills">Selected Skills</h2>
            <span>{copy.folio}</span>
          </div>

          <div className="skills-detail-rows">
            {copy.details.map((skill, index) => (
              <article className="skills-detail-row" key={skill.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        {nextCategory && nextCopy ? (
          <footer className="skills-detail-footer">
            <span>Next field</span>
            <Link href={`/skills/${nextCategory.slug}`}>{nextCopy.title}</Link>
          </footer>
        ) : null}
      </main>
    </div>
  );
}
