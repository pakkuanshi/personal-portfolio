import type { Locale } from "@/types/preferences";

export type SkillIcon =
  | "analysis"
  | "strategy"
  | "visualization"
  | "programming"
  | "seo"
  | "advertising"
  | "research"
  | "content"
  | "planning"
  | "insight"
  | "systems"
  | "more";

export type SkillCardType = "skill" | "more";

export type SkillCardCopy = {
  title: string;
};

export type SkillCard = {
  id: string;
  icon: SkillIcon;
  type: SkillCardType;
  href?: string;
  translations: Record<Locale, SkillCardCopy>;
};

export const skillsPreviewCopy: Record<Locale, { title: string }> = {
  en: {
    title: "Skills",
  },
  "zh-CN": {
    title: "技能",
  },
  "zh-TW": {
    title: "技能",
  },
};

export const skillsPageCopy: Record<
  Locale,
  { eyebrow: string; title: string; description: string }
> = {
  en: {
    eyebrow: "Skills",
    title: "Skills archive",
    description: "Placeholder structure for future skill details.",
  },
  "zh-CN": {
    eyebrow: "技能",
    title: "技能档案",
    description: "这里先保留未来补充技能详情的基础结构。",
  },
  "zh-TW": {
    eyebrow: "技能",
    title: "技能檔案",
    description: "這裡先保留未來補充技能詳情的基礎結構。",
  },
};

const skillTitle = (
  en: string,
  zhHans = en,
  zhHant = zhHans,
): Record<Locale, SkillCardCopy> => ({
  en: { title: en },
  "zh-CN": { title: zhHans },
  "zh-TW": { title: zhHant },
});

export const skills: SkillCard[] = [
  {
    id: "skill-01",
    icon: "analysis",
    type: "skill",
    translations: skillTitle("SQL"),
  },
  {
    id: "skill-02",
    icon: "strategy",
    type: "skill",
    translations: skillTitle("R language", "R语言", "R語言"),
  },
  {
    id: "skill-03",
    icon: "visualization",
    type: "skill",
    translations: skillTitle("Python"),
  },
  {
    id: "skill-04",
    icon: "programming",
    type: "skill",
    translations: skillTitle("WordPress"),
  },
  {
    id: "skill-05",
    icon: "seo",
    type: "skill",
    translations: skillTitle("Google Analytics"),
  },
  {
    id: "skill-06",
    icon: "advertising",
    type: "skill",
    translations: skillTitle("Meta Ads"),
  },
  {
    id: "skill-07",
    icon: "research",
    type: "skill",
    translations: skillTitle("YouTube Ads"),
  },
  {
    id: "skill-08",
    icon: "content",
    type: "skill",
    translations: skillTitle("CapCut", "剪映"),
  },
  {
    id: "skill-09",
    icon: "planning",
    type: "skill",
    translations: skillTitle("Final Cut Pro"),
  },
  {
    id: "skill-10",
    icon: "insight",
    type: "skill",
    translations: skillTitle("Cantonese", "粤语", "粵語"),
  },
  {
    id: "skill-11",
    icon: "systems",
    type: "skill",
    translations: skillTitle("Microsoft Office"),
  },
  {
    id: "more",
    icon: "more",
    type: "more",
    href: "/skills",
    translations: skillTitle("More"),
  },
];
