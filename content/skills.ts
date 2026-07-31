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

export type SkillToolIcon =
  | "advertising"
  | "analytics"
  | "automation"
  | "content"
  | "data"
  | "document"
  | "research"
  | "search"
  | "strategy"
  | "web";

export type SkillTool = {
  name: string;
  description: string;
  icon?: SkillToolIcon;
};

export type SkillCategoryCopy = {
  title: string;
  titleLines: string[];
  rubric: string;
  note: string;
  folio: string;
  summary: string;
  tools: SkillTool[];
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
      "A poster index of Kristy's performance marketing, analytics, search, strategy, web automation, and creative content practice.",
  },
  "zh-CN": {
    eyebrow: "技能",
    title: "六个实践领域",
    description:
      "以作品集海报的方式呈现 Kristy 的广告投放、市场营销分析、SEO 增长、策略规划、网站技术与内容创作能力。",
  },
  "zh-TW": {
    eyebrow: "技能",
    title: "六個實踐領域",
    description:
      "以作品集海報的方式呈現 Kristy 的廣告投放、市場行銷分析、SEO 增長、策略規劃、網站技術與內容創作能力。",
  },
};

export const skillsDetailPageCopy: Record<
  Locale,
  {
    backLabel: string;
    toolsTitle: string;
    toolsDescription: string;
    capabilitiesTitle: string;
    capabilitiesDescription: string;
  }
> = {
  en: {
    backLabel: "Skills Index",
    toolsTitle: "Core Tools",
    toolsDescription:
      "The platforms, systems, and working tools I use to turn strategy into practical execution.",
    capabilitiesTitle: "What I Do",
    capabilitiesDescription:
      "The practical capabilities behind this area of work, from planning and setup to analysis and refinement.",
  },
  "zh-CN": {
    backLabel: "技能索引",
    toolsTitle: "核心工具",
    toolsDescription:
      "我用来把策略转化为实际执行的平台、系统与工作工具。",
    capabilitiesTitle: "我能做什么",
    capabilitiesDescription:
      "这个能力领域中的实际工作内容，从规划、搭建到分析与优化。",
  },
  "zh-TW": {
    backLabel: "技能索引",
    toolsTitle: "核心工具",
    toolsDescription:
      "我用來把策略轉化為實際執行的平台、系統與工作工具。",
    capabilitiesTitle: "我能做什麼",
    capabilitiesDescription:
      "這個能力領域中的實際工作內容，從規劃、搭建到分析與優化。",
  },
};

const categoryCopy = (
  copy: SkillCategoryCopy,
  zhHans?: Partial<SkillCategoryCopy>,
  zhHant?: Partial<SkillCategoryCopy>,
): Record<Locale, SkillCategoryCopy> => ({
  en: copy,
  "zh-CN": { ...copy, ...(zhHans ?? {}) },
  "zh-TW": { ...copy, ...((zhHant ?? zhHans) ?? {}) },
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
      title: "Performance Marketing",
      titleLines: ["Performance", "Marketing"],
      rubric: "Ads",
      note: "Budget, audience, and message architecture for measurable acquisition.",
      folio: "Acquisition / Testing / Scale",
      summary:
        "Performance marketing is the paid acquisition practice behind campaigns that need clear targeting, measurable spend, and accountable conversion paths. I use it to connect audience strategy with channel setup, testing, and performance analysis.",
      tools: [
        {
          name: "Google Ads",
          description:
            "Search campaign management, keyword optimization, and performance measurement.",
          icon: "advertising",
        },
        {
          name: "Meta Ads",
          description:
            "Paid social audience testing, creative iteration, and conversion-focused campaign setup.",
          icon: "advertising",
        },
        {
          name: "YouTube Ads",
          description:
            "Video campaign planning, audience reach, and performance review across awareness and conversion goals.",
          icon: "content",
        },
        {
          name: "Google Analytics",
          description:
            "Traffic, conversion, and campaign quality analysis across paid media journeys.",
          icon: "analytics",
        },
      ],
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
    }, {
      title: "广告投放",
      titleLines: ["广告", "投放"],
      rubric: "广告",
    }, {
      title: "廣告投放",
      titleLines: ["廣告", "投放"],
      rubric: "廣告",
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
        "Marketing analytics turns campaign activity into evidence for decisions. I use it to build reporting logic, interpret performance signals, and translate data into next-step recommendations.",
      tools: [
        {
          name: "SQL",
          description:
            "Marketing data querying, reporting, and campaign performance analysis.",
          icon: "data",
        },
        {
          name: "Python",
          description:
            "Data cleaning, lightweight analysis, and repeatable reporting workflows.",
          icon: "automation",
        },
        {
          name: "R language",
          description:
            "Statistical analysis, structured exploration, and research-oriented data review.",
          icon: "analytics",
        },
        {
          name: "Google Analytics",
          description:
            "Traffic source analysis, conversion review, and audience behavior reporting.",
          icon: "analytics",
        },
        {
          name: "Microsoft Office",
          description:
            "Insight documentation, reporting tables, and stakeholder-ready analysis decks.",
          icon: "document",
        },
      ],
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
    }, {
      title: "市场营销分析",
      titleLines: ["市场营销", "分析"],
      rubric: "分析",
    }, {
      title: "市場行銷分析",
      titleLines: ["市場行銷", "分析"],
      rubric: "分析",
    }),
  },
  {
    slug: "seo-growth",
    number: "03",
    posterClassName: "skills-poster--seo",
    translations: categoryCopy({
      title: "Search & Growth",
      titleLines: ["Search", "& Growth"],
      rubric: "Search",
      note: "Search visibility, content intent, and compounding discovery loops.",
      folio: "Search / Content / CRO",
      summary:
        "Search and growth work connects organic visibility with content, site structure, and conversion paths. I use it to identify demand, improve pages, and build compounding discovery systems.",
      tools: [
        {
          name: "Semrush",
          description:
            "Keyword research, competitor analysis, and SEO opportunity discovery.",
          icon: "search",
        },
        {
          name: "Google Search Console",
          description:
            "Search performance review, indexing checks, and query-level optimization.",
          icon: "search",
        },
        {
          name: "Google Analytics",
          description:
            "Organic traffic behavior, conversion paths, and landing page performance analysis.",
          icon: "analytics",
        },
        {
          name: "WordPress",
          description:
            "Content publishing, on-page updates, metadata edits, and site structure support.",
          icon: "web",
        },
      ],
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
    }, {
      title: "SEO 与增长",
      titleLines: ["SEO", "与增长"],
      rubric: "搜索",
    }, {
      title: "SEO 與增長",
      titleLines: ["SEO", "與增長"],
      rubric: "搜尋",
    }),
  },
  {
    slug: "research-strategy",
    number: "04",
    posterClassName: "skills-poster--research",
    translations: categoryCopy({
      title: "Strategy & Insights",
      titleLines: ["Strategy", "& Insights"],
      rubric: "Strategy",
      note: "Market context, audience intelligence, and the argument behind the work.",
      folio: "Audience / Market / Narrative",
      summary:
        "Strategy and insights work defines the argument behind campaigns before execution begins. I use research, audience context, and competitive signals to shape positioning, messaging, and planning decisions.",
      tools: [
        {
          name: "Desk Research",
          description:
            "Market, audience, and competitor context gathering before strategy decisions.",
          icon: "research",
        },
        {
          name: "Google Forms",
          description:
            "Lightweight survey collection, audience feedback, and structured response review.",
          icon: "document",
        },
        {
          name: "Google Trends",
          description:
            "Demand pattern review, topic validation, and cultural timing checks.",
          icon: "search",
        },
        {
          name: "Microsoft Office",
          description:
            "Planning documents, research synthesis, and presentation-ready strategy narratives.",
          icon: "strategy",
        },
      ],
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
    }, {
      title: "策略规划",
      titleLines: ["策略", "规划"],
      rubric: "策略",
    }, {
      title: "策略規劃",
      titleLines: ["策略", "規劃"],
      rubric: "策略",
    }),
  },
  {
    slug: "web-automation",
    number: "05",
    posterClassName: "skills-poster--web",
    translations: categoryCopy({
      title: "Web & AI Automation",
      titleLines: ["Web & AI", "Automation"],
      rubric: "AI",
      note: "Landing pages, workflows, and quiet infrastructure behind better marketing.",
      folio: "Pages / Forms / Flows",
      summary:
        "Web and AI automation supports the systems behind cleaner marketing operations. I use it to build pages, organize workflows, and reduce repetitive work across content, forms, and data handoffs.",
      tools: [
        {
          name: "WordPress",
          description:
            "Marketing page updates, CMS organization, and campaign-ready content publishing.",
          icon: "web",
        },
        {
          name: "Python",
          description:
            "Lightweight scripts for data cleanup, repetitive tasks, and workflow support.",
          icon: "automation",
        },
        {
          name: "AI Assistants",
          description:
            "Drafting support, workflow ideation, content operations, and structured task acceleration.",
          icon: "automation",
        },
        {
          name: "Form Workflows",
          description:
            "Submission routing, lead capture structure, and follow-up process organization.",
          icon: "document",
        },
      ],
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
    }, {
      title: "网站技术与自动化",
      titleLines: ["网站技术", "与自动化"],
      rubric: "自动化",
    }, {
      title: "網站技術與自動化",
      titleLines: ["網站技術", "與自動化"],
      rubric: "自動化",
    }),
  },
  {
    slug: "creative-production",
    number: "06",
    posterClassName: "skills-poster--creative",
    translations: categoryCopy({
      title: "Creative & Content",
      titleLines: ["Creative", "& Content"],
      rubric: "Content",
      note: "Copy, concepts, and assets shaped for attention, clarity, and brand memory.",
      folio: "Copy / Concepts / Assets",
      summary:
        "Creative and content work turns strategy into messages, concepts, and assets people can actually engage with. I use it to shape campaigns, write copy, coordinate production, and evaluate creative performance.",
      tools: [
        {
          name: "Canva",
          description:
            "Fast visual layouts, campaign assets, and presentation-ready creative drafts.",
          icon: "content",
        },
        {
          name: "CapCut",
          description:
            "Short-form video editing, social content assembly, and lightweight motion edits.",
          icon: "content",
        },
        {
          name: "Final Cut Pro",
          description:
            "Video editing, timeline refinement, and polished campaign content production.",
          icon: "content",
        },
        {
          name: "Microsoft Office",
          description:
            "Creative briefs, copy drafts, content calendars, and stakeholder review documents.",
          icon: "document",
        },
      ],
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
    }, {
      title: "内容创作",
      titleLines: ["内容", "创作"],
      rubric: "内容",
    }, {
      title: "內容創作",
      titleLines: ["內容", "創作"],
      rubric: "內容",
    }),
  },
];

export const skills: SkillCard[] = [
  ...skillCategories.map((category) => ({
    id: category.slug,
    type: "skill" as const,
    href: `/skills/${category.slug}`,
    translations: skillTitle(
      category.translations.en.title,
      category.translations["zh-CN"].title,
      category.translations["zh-TW"].title,
    ),
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
