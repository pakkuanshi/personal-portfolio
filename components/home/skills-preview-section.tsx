"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { skills, skillsPreviewCopy } from "@/content/skills";

export function SkillsPreviewSection() {
  const { locale } = usePreferences();
  const copy = skillsPreviewCopy[locale];

  return (
    <section className="skills-preview-section" aria-labelledby="skills-preview-title">
      <div className="site-container skills-preview-inner">
        <div className="skills-preview-heading">
          <h2 className="skills-preview-title" id="skills-preview-title">
            {copy.title}
          </h2>
        </div>

        <div className="skills-preview-grid">
          {skills.map((skill) => {
            const skillCopy = skill.translations[locale];
            const cardClassName =
              skill.type === "more"
                ? "skills-preview-card skills-preview-card--more"
                : "skills-preview-card";
            const cardContent =
              skill.type === "more" ? (
                <span className="skills-preview-more-content">
                  <span className="skills-preview-card-title">
                    {skillCopy.title}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="skills-preview-more-icon"
                    size={16}
                    strokeWidth={1.35}
                  />
                </span>
              ) : (
                <span className="skills-preview-card-title">
                  {skillCopy.title}
                </span>
              );

            if (skill.type === "more" && skill.href) {
              return (
                <Link className={cardClassName} href={skill.href} key={skill.id}>
                  {cardContent}
                </Link>
              );
            }

            return (
              <div className={cardClassName} key={skill.id}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
