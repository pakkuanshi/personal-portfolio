import type { Locale } from "@/types/preferences";

export type SkillCardType = "skill" | "more";

export type SkillCardCopy = {
  title: string;
};

export type SkillCard = {
  id: string;
  type: SkillCardType;
  href?: string;
  translations: Record<Locale, SkillCardCopy>;
};

export type SkillDetail = {
  name: string;
  description: string;
};

export type SkillCategoryCopy = {
  title: string;
  titleLines: string[];
  rubric: string;
  note: string;
  folio: string;
  summary: string;
  detailKicker: string;
  details: SkillDetail[];
};

export type SkillCategory = {
  slug: string;
  number: string;
  posterClassName: string;
  translations: Record<Locale, SkillCategoryCopy>;
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
    title: "Six fields of practice",
    description:
      "A poster index of the categories behind Kristy's marketing, growth, analytics, web, strategy, and creative work.",
  },
  "zh-CN": {
    eyebrow: "技能",
    title: "六个实践领域",
    description:
      "以作品集海报的方式呈现 Kristy 的营销、增长、分析、网站、策略与创意制作能力。",
  },
  "zh-TW": {
    eyebrow: "技能",
    title: "六個實踐領域",
    description:
      "以作品集海報的方式呈現 Kristy 的行銷、成長、分析、網站、策略與創意製作能力。",
  },
};

const categoryCopy = (
  copy: SkillCategoryCopy,
): Record<Locale, SkillCategoryCopy> => ({
  en: copy,
  "zh-CN": copy,
  "zh-TW": copy,
});

const skillTitle = (
  en: string,
  zhHans = en,
  zhHant = zhHans,
): Record<Locale, SkillCardCopy> => ({
  en: { title: en },
  "zh-CN": { title: zhHans },
  "zh-TW": { title: zhHant },
});

export const skillCategories: SkillCategory[] = [
  {
    slug: "paid-media",
    number: "01",
    posterClassName: "skills-poster--paid",
    translations: categoryCopy({
      title: "Paid Media",
      titleLines: ["Paid", "Media"],
      rubric: "Demand Systems",
      note: "Budget, audience, and message architecture for measurable acquisition.",
      folio: "Acquisition / Testing / Scale",
      summary:
        "Campaign structures, channel planning, paid social, search, and conversion-focused media systems.",
      detailKicker: "Acquisition practice",
      details: [
        {
          name: "Channel Planning",
          description:
            "Translating business goals into media mix, launch sequence, and spend allocation.",
        },
        {
          name: "Campaign Architecture",
          description:
            "Building account structures around intent, funnel stage, audience quality, and learning speed.",
        },
        {
          name: "Paid Search",
          description:
            "Keyword strategy, ad group mapping, match type control, query hygiene, and landing page alignment.",
        },
        {
          name: "Paid Social",
          description:
            "Creative testing, audience segmentation, retargeting logic, and offer-message pairing.",
        },
        {
          name: "Budget Pacing",
          description:
            "Monitoring spend, efficiency, and volume so experiments can scale without drifting off target.",
        },
        {
          name: "Conversion Optimization",
          description:
            "Reading performance signals across ads, forms, pages, and funnels to improve acquisition quality.",
        },
      ],
    }),
  },
  {
    slug: "marketing-analytics",
    number: "02",
    posterClassName: "skills-poster--analytics",
    translations: categoryCopy({
      title: "Marketing Analytics",
      titleLines: ["Marketing", "Analytics"],
      rubric: "Measurement",
      note: "A clean reading system for the decisions that shape growth.",
      folio: "Attribution / Dashboards / Insight",
      summary:
        "Measurement strategy, dashboards, funnel analysis, attribution thinking, and campaign reporting.",
      detailKicker: "Measurement practice",
      details: [
        {
          name: "Measurement Planning",
          description:
            "Defining events, goals, source logic, and reporting layers before campaigns go live.",
        },
        {
          name: "Funnel Analysis",
          description:
            "Locating drop-off, lag, and quality shifts across visitor, lead, and customer journeys.",
        },
        {
          name: "Dashboard Design",
          description:
            "Turning noisy metrics into readable views for weekly decision-making and stakeholder updates.",
        },
        {
          name: "Attribution Review",
          description:
            "Comparing platform, analytics, and CRM signals without treating any single report as absolute truth.",
        },
        {
          name: "Experiment Readouts",
          description:
            "Summarizing test results with context, caveats, confidence, and the next decision.",
        },
        {
          name: "Tracking QA",
          description:
            "Auditing UTM standards, event capture, conversion paths, and reporting consistency.",
        },
      ],
    }),
  },
  {
    slug: "seo-growth",
    number: "03",
    posterClassName: "skills-poster--seo",
    translations: categoryCopy({
      title: "SEO & Growth",
      titleLines: ["SEO", "& Growth"],
      rubric: "Organic Demand",
      note: "Search visibility, content intent, and compounding discovery loops.",
      folio: "Search / Content / CRO",
      summary:
        "Organic growth strategy, technical SEO review, content planning, and conversion experiments.",
      detailKicker: "Organic growth practice",
      details: [
        {
          name: "Keyword Strategy",
          description:
            "Mapping demand, intent, difficulty, and commercial value into a practical content plan.",
        },
        {
          name: "Technical SEO Review",
          description:
            "Checking crawlability, indexation, internal linking, metadata, speed, and structured content health.",
        },
        {
          name: "Content Briefs",
          description:
            "Creating briefs that connect search intent, brand point of view, and conversion purpose.",
        },
        {
          name: "On-Page Optimization",
          description:
            "Improving page hierarchy, headings, metadata, internal links, and answer quality.",
        },
        {
          name: "Growth Experiments",
          description:
            "Designing lightweight tests across offers, landing pages, forms, and traffic paths.",
        },
        {
          name: "Search Reporting",
          description:
            "Reading rankings, impressions, click-through, and assisted conversion as one operating picture.",
        },
      ],
    }),
  },
  {
    slug: "research-strategy",
    number: "04",
    posterClassName: "skills-poster--research",
    translations: categoryCopy({
      title: "Research & Strategy",
      titleLines: ["Research", "& Strategy"],
      rubric: "Positioning",
      note: "Market context, audience intelligence, and the argument behind the work.",
      folio: "Audience / Market / Narrative",
      summary:
        "Research synthesis, competitor review, positioning, journey mapping, and campaign strategy.",
      detailKicker: "Strategy practice",
      details: [
        {
          name: "Market Research",
          description:
            "Sourcing patterns from audience behavior, category norms, competitor motion, and customer language.",
        },
        {
          name: "Competitor Analysis",
          description:
            "Studying positioning, offer design, channel mix, messaging, and whitespace opportunities.",
        },
        {
          name: "Audience Segmentation",
          description:
            "Defining audience groups by needs, motivations, buying triggers, and readiness.",
        },
        {
          name: "Journey Mapping",
          description:
            "Connecting awareness, consideration, decision, and retention moments into a coherent path.",
        },
        {
          name: "Messaging Strategy",
          description:
            "Sharpening value propositions, proof points, objections, and campaign narratives.",
        },
        {
          name: "Planning Workshops",
          description:
            "Turning stakeholder input into priorities, hypotheses, and operating direction.",
        },
      ],
    }),
  },
  {
    slug: "web-automation",
    number: "05",
    posterClassName: "skills-poster--web",
    translations: categoryCopy({
      title: "Web & Automation",
      titleLines: ["Web &", "Automation"],
      rubric: "Systems",
      note: "Landing pages, workflows, and quiet infrastructure behind better marketing.",
      folio: "Pages / Forms / Flows",
      summary:
        "Marketing sites, landing pages, forms, lightweight automations, integrations, and operational workflows.",
      detailKicker: "Systems practice",
      details: [
        {
          name: "Landing Page Systems",
          description:
            "Designing page structures around offer clarity, proof, conversion paths, and campaign fit.",
        },
        {
          name: "Form Workflows",
          description:
            "Routing submissions, reducing friction, capturing context, and keeping follow-up reliable.",
        },
        {
          name: "Marketing Automation",
          description:
            "Building simple sequences, alerts, handoffs, and data movement across common tools.",
        },
        {
          name: "CMS Operations",
          description:
            "Organizing reusable content, page updates, metadata, and publishing processes.",
        },
        {
          name: "Integration Mapping",
          description:
            "Clarifying how leads, events, lists, and campaign data should pass between systems.",
        },
        {
          name: "QA & Maintenance",
          description:
            "Checking forms, links, analytics events, responsive behavior, and launch readiness.",
        },
      ],
    }),
  },
  {
    slug: "creative-production",
    number: "06",
    posterClassName: "skills-poster--creative",
    translations: categoryCopy({
      title: "Creative Production",
      titleLines: ["Creative", "Production"],
      rubric: "Campaign Craft",
      note: "Copy, concepts, and assets shaped for attention, clarity, and brand memory.",
      folio: "Copy / Concepts / Assets",
      summary:
        "Creative briefs, campaign concepts, copywriting, production coordination, and asset QA.",
      detailKicker: "Production practice",
      details: [
        {
          name: "Creative Briefs",
          description:
            "Framing audience, offer, message, proof, constraints, and deliverables before production starts.",
        },
        {
          name: "Ad Concepts",
          description:
            "Developing campaign ideas that can flex across formats, audiences, and testing plans.",
        },
        {
          name: "Copywriting",
          description:
            "Writing headlines, ad copy, landing page sections, email copy, and concise product language.",
        },
        {
          name: "Production Planning",
          description:
            "Coordinating asset lists, deadlines, format needs, review rounds, and launch dependencies.",
        },
        {
          name: "Asset QA",
          description:
            "Reviewing copy, dimensions, hierarchy, destination links, naming, and campaign alignment.",
        },
        {
          name: "Creative Analysis",
          description:
            "Reading performance patterns to identify which messages, hooks, and formats deserve more investment.",
        },
      ],
    }),
  },
];

export const skills: SkillCard[] = [
  ...skillCategories.map((category) => ({
    id: category.slug,
    type: "skill" as const,
    href: `/skills/${category.slug}`,
    translations: skillTitle(category.translations.en.title),
  })),
  {
    id: "more",
    type: "more",
    href: "/skills",
    translations: skillTitle("More"),
  },
];

export function getSkillCategory(slug: string) {
  return skillCategories.find((category) => category.slug === slug);
}

export function getNextSkillCategory(slug: string) {
  const index = skillCategories.findIndex((category) => category.slug === slug);

  if (index === -1) {
    return undefined;
  }

  return skillCategories[(index + 1) % skillCategories.length];
}
