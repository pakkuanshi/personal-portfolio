import type { Project } from "@/types/project";
import type { Locale } from "@/types/preferences";

export type ExperienceProject = {
  id: string;
  title: {
    en: string;
    "zh-CN": string;
    "zh-TW": string;
  };
  type: {
    en: string;
    "zh-CN": string;
    "zh-TW": string;
  };
  year: {
    en: string;
    "zh-CN": string;
    "zh-TW": string;
  };
  overview: {
    en: string;
    "zh-CN": string;
    "zh-TW": string;
  };
  image: string | null;
  href: string;
};

export const projectsArchiveCopy = {
  en: {
    title: "Projects",
    intro:
      "Selected campaigns, research systems, and digital experiences explored through strategy, storytelling, and interface thinking.",
  },
  "zh-CN": {
    title: "项目",
    intro:
      "通过策略、叙事与界面思维探索的精选传播项目、研究系统与数字体验。",
  },
  "zh-TW": {
    title: "項目",
    intro:
      "透過策略、敘事與介面思維探索的精選傳播項目、研究系統與數位體驗。",
  },
};

export const projectsIndexCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  en: {
    eyebrow: "Projects",
    title: "Selected case studies and strategic work.",
    description:
      "A scalable project index for campaign strategy, SEO thinking, digital marketing, analytics, and communication case studies.",
  },
  "zh-CN": {
    eyebrow: "项目",
    title: "精选案例研究与策略作品。",
    description:
      "一个可扩展的项目索引，用于承载传播策略、SEO 思维、数字营销、数据分析与传播案例。",
  },
  "zh-TW": {
    eyebrow: "項目",
    title: "精選案例研究與策略作品。",
    description:
      "一個可擴展的項目索引，用於承載傳播策略、SEO 思維、數位行銷、資料分析與傳播案例。",
  },
};

export const experienceProjects: ExperienceProject[] = [
  {
    id: "foster-care",
    title: {
      en: "Sheboygan County Foster Care Campaign",
      "zh-CN": "Sheboygan 寄养家庭Campaign",
      "zh-TW": "Sheboygan 寄養家庭Campaign",
    },
    type: {
      en: "Campaign Strategy / Community Outreach",
      "zh-CN": "传播活动策略 / 社区推广",
      "zh-TW": "傳播活動策略 / 社區推廣",
    },
    year: {
      en: "Sept. 2025 to Dec. 2025",
      "zh-CN": "2025年9月至2025年12月",
      "zh-TW": "2025年9月至2025年12月",
    },
    overview: {
      en: "A foster care recruitment campaign developed around local trust, community storytelling, and emotionally grounded communication. The project explored how digital messaging and offline influence could reduce public hesitation toward foster parenting while building stronger community awareness.",
      "zh-CN":
        "一个围绕本地信任、社区叙事与情感化传播展开的寄养家庭招募项目。项目探索如何通过数字信息与线下影响力，降低公众对成为寄养家庭的犹豫，同时建立更强的社区认知。",
      "zh-TW":
        "一個圍繞在地信任、社區敘事與情感化傳播展開的寄養家庭招募項目。項目探索如何透過數位訊息與線下影響力，降低公眾對成為寄養家庭的猶豫，同時建立更強的社區認知。",
    },
    image: "/images/experiences/sheboygan-foster-care-enhanced.png",
    href: "/experiences/projects/foster-care",
  },
  {
    id: "grape-nuts",
    title: {
      en: "Grape-Nut Campaign",
      "zh-CN": "Grape-Nut Campaign",
      "zh-TW": "Grape-Nut Campaign",
    },
    type: {
      en: "Brand Strategy / Integrated Campaign",
      "zh-CN": "品牌策略 / 整合营销传播",
      "zh-TW": "品牌策略 / 整合行銷傳播",
    },
    year: {
      en: "May 2025 to Aug. 2025",
      "zh-CN": "2025年5月至2025年8月",
      "zh-TW": "2025年5月至2025年8月",
    },
    overview: {
      en: "A campaign concept repositioning Grape-Nuts for Gen Z and health-conscious millennials through fitness culture, pop-up activations, and community-oriented brand experiences. The work focused on modernizing perception while maintaining the brand’s legacy identity.",
      "zh-CN":
        "一个面向 Z 世代与健康意识强的千禧一代重新定位 Grape-Nuts 的传播概念。项目通过健身文化、快闪活动与社区型品牌体验，尝试在保留品牌传统识别的同时更新受众认知。",
      "zh-TW":
        "一個面向 Z 世代與健康意識強的千禧世代重新定位 Grape-Nuts 的傳播概念。項目透過健身文化、快閃活動與社區型品牌體驗，嘗試在保留品牌傳統識別的同時更新受眾認知。",
    },
    image: "/images/experiences/grape-nut-enhanced.png",
    href: "/experiences/projects/grape-nuts",
  },
  {
    id: "good-to-go",
    title: {
      en: "Good to Go Campaign",
      "zh-CN": "Good to Go Campaign",
      "zh-TW": "Good to Go Campaign",
    },
    type: {
      en: "UX / Information Design",
      "zh-CN": "用户体验 / 信息设计",
      "zh-TW": "使用者體驗 / 資訊設計",
    },
    year: {
      en: "Jan. 2025 to May. 2025",
      "zh-CN": "2025年1月至2025年5月",
      "zh-TW": "2025年1月至2025年5月",
    },
    overview: {
      en: "A wait-time tracking concept for bars and restaurants designed to improve social planning and reduce uncertainty in crowded nightlife environments. The project combined interface thinking, user behavior observation, and communication-focused storytelling.",
      "zh-CN":
        "一个面向酒吧与餐厅的等候时间追踪概念，旨在改善社交计划并降低拥挤夜生活场景中的不确定性。项目结合了界面思维、用户行为观察与以传播为导向的叙事方式。",
      "zh-TW":
        "一個面向酒吧與餐廳的等候時間追蹤概念，旨在改善社交規劃並降低擁擠夜生活場景中的不確定性。項目結合了介面思維、使用者行為觀察與以傳播為導向的敘事方式。",
    },
    image: "/images/experiences/good-to-go-logo.png",
    href: "/experiences/projects/good-to-go",
  },
];

export const projects: Project[] = [
  {
    slug: "campaign-positioning-audit",
    title: "Sheboygan County Foster Care Campaign",
    shortDescription:
      "Placeholder case study for evaluating audience framing, message hierarchy, channel fit, and campaign clarity.",
    category: "Campaign Strategy",
    year: "2026",
    role: "Strategy, research, synthesis",
    tools: ["Audience research", "Competitive scan", "Messaging matrix"],
    tags: ["Positioning", "Campaign planning", "Strategic communication"],
    challenge:
      "Placeholder challenge: the campaign needs a more focused strategic narrative across touchpoints.",
    insight:
      "Placeholder insight: audience expectations and brand proof points are not yet aligned in a clear hierarchy.",
    strategy:
      "Placeholder strategy: define the primary audience need, sharpen the core message, and map supporting proof by channel.",
    execution:
      "Placeholder execution: build an audit framework, compare sample touchpoints, and translate findings into recommendations.",
    impact:
      "Placeholder impact: future content will describe the strategic value, learning outcomes, and measurable communication improvements.",
    coverImage: {
      src: null,
      alt: "Placeholder cover for campaign positioning audit case study",
    },
    featured: true,
    translations: {
      "zh-CN": {
        title: "Sheboygan 寄养家庭Campaign",
        shortDescription:
          "用于评估受众框架、信息层级、渠道匹配与传播清晰度的案例占位。",
        category: "传播策略",
        role: "策略、研究、综合分析",
        tools: ["受众研究", "竞品扫描", "信息矩阵"],
        tags: ["定位", "传播规划", "战略传播"],
        challenge:
          "占位挑战：这个传播项目需要在不同触点之间形成更聚焦的战略叙事。",
        insight:
          "占位洞察：受众期待与品牌证据尚未形成清晰的信息层级。",
        strategy:
          "占位策略：定义核心受众需求，收紧主信息，并按渠道匹配支持性证据。",
        execution:
          "占位执行：建立审计框架，对比样本触点，并把发现转化为可执行建议。",
        impact:
          "占位结果：未来会补充这个项目的战略价值、学习成果与可衡量传播改进。",
      },
      "zh-TW": {
        title: "Sheboygan 寄養家庭Campaign",
        shortDescription:
          "用於評估受眾框架、訊息層級、渠道匹配與傳播清晰度的案例佔位。",
        category: "傳播策略",
        role: "策略、研究、綜合分析",
        tools: ["受眾研究", "競品掃描", "訊息矩陣"],
        tags: ["定位", "傳播規劃", "策略傳播"],
        challenge:
          "佔位挑戰：這個傳播項目需要在不同觸點之間形成更聚焦的策略敘事。",
        insight:
          "佔位洞察：受眾期待與品牌證據尚未形成清晰的訊息層級。",
        strategy:
          "佔位策略：定義核心受眾需求，收緊主訊息，並按渠道匹配支持性證據。",
        execution:
          "佔位執行：建立審計框架，對比樣本觸點，並把發現轉化為可執行建議。",
        impact:
          "佔位成果：未來會補充這個專案的策略價值、學習成果與可衡量傳播改進。",
      },
    },
    links: [
      {
        label: "Project notes",
        href: "#",
      },
    ],
  },
  {
    slug: "search-led-content-system",
    title: "Grape-Nut Campaign",
    shortDescription:
      "Placeholder case study for turning search intent, audience questions, and content structure into a strategic system.",
    category: "SEO / Content Strategy",
    year: "2026",
    role: "SEO research, content architecture",
    tools: ["Keyword research", "Search intent mapping", "Content planning"],
    tags: ["SEO", "Content strategy", "Information architecture"],
    challenge:
      "Placeholder challenge: content decisions need to connect search behavior with audience education and conversion goals.",
    insight:
      "Placeholder insight: search queries reveal different levels of audience readiness and different communication needs.",
    strategy:
      "Placeholder strategy: organize content around intent clusters, message priorities, and clear next-step pathways.",
    execution:
      "Placeholder execution: create a content map, define page roles, and outline measurement signals for each content type.",
    impact:
      "Placeholder impact: future content will explain how the system improves clarity, discoverability, and strategic consistency.",
    coverImage: {
      src: null,
      alt: "Placeholder cover for search-led content system case study",
    },
    featured: true,
    translations: {
      "zh-CN": {
        title: "Grape-Nut Campaign",
        shortDescription:
          "用于把搜索意图、受众问题与内容结构转化为战略系统的案例占位。",
        category: "SEO / 内容策略",
        role: "SEO 研究、内容架构",
        tools: ["关键词研究", "搜索意图映射", "内容规划"],
        tags: ["SEO", "内容策略", "信息架构"],
        challenge:
          "占位挑战：内容决策需要把搜索行为、受众教育与转化目标连接起来。",
        insight:
          "占位洞察：搜索问题揭示了受众不同的准备程度与传播需求。",
        strategy:
          "占位策略：围绕意图集群、信息优先级与清晰下一步路径组织内容。",
        execution:
          "占位执行：创建内容地图，定义页面角色，并为每种内容类型设计衡量信号。",
        impact:
          "占位结果：未来会说明这个系统如何提升清晰度、可发现性与策略一致性。",
      },
      "zh-TW": {
        title: "Grape-Nut Campaign",
        shortDescription:
          "用於把搜尋意圖、受眾問題與內容結構轉化為策略系統的案例佔位。",
        category: "SEO / 內容策略",
        role: "SEO 研究、內容架構",
        tools: ["關鍵字研究", "搜尋意圖映射", "內容規劃"],
        tags: ["SEO", "內容策略", "資訊架構"],
        challenge:
          "佔位挑戰：內容決策需要把搜尋行為、受眾教育與轉化目標連接起來。",
        insight:
          "佔位洞察：搜尋問題揭示了受眾不同的準備程度與傳播需求。",
        strategy:
          "佔位策略：圍繞意圖集群、訊息優先級與清晰下一步路徑組織內容。",
        execution:
          "佔位執行：建立內容地圖，定義頁面角色，並為每種內容類型設計衡量訊號。",
        impact:
          "佔位成果：未來會說明這個系統如何提升清晰度、可發現性與策略一致性。",
      },
    },
  },
  {
    slug: "marketing-analytics-readout",
    title: "Good to Go Campaign",
    shortDescription:
      "Placeholder case study for translating performance data into communication decisions and next-step recommendations.",
    category: "Data Analysis",
    year: "2026",
    role: "Analysis, reporting, insight writing",
    tools: ["Dashboard review", "KPI framing", "Insight synthesis"],
    tags: ["Analytics", "Reporting", "Decision-making"],
    challenge:
      "Placeholder challenge: campaign metrics need to move beyond summary reporting into strategic interpretation.",
    insight:
      "Placeholder insight: performance data becomes more useful when grouped by awareness, engagement, and conversion intent.",
    strategy:
      "Placeholder strategy: create a hierarchy of metrics and pair each group with a decision-oriented interpretation.",
    execution:
      "Placeholder execution: draft a readout structure, identify key signals, and frame recommendations for future testing.",
    impact:
      "Placeholder impact: future content will show how analytics can support clearer communication planning.",
    coverImage: {
      src: null,
      alt: "Placeholder cover for marketing analytics readout case study",
    },
    featured: false,
    translations: {
      "zh-CN": {
        title: "Good to Go Campaign",
        shortDescription:
          "用于把表现数据转译成传播判断与下一步建议的案例占位。",
        category: "数据分析",
        role: "分析、汇报、洞察写作",
        tools: ["数据看板复盘", "KPI 框架", "洞察综合"],
        tags: ["数据分析", "报告", "决策"],
        challenge:
          "占位挑战：传播活动指标需要从总结性汇报进入策略性解读。",
        insight:
          "占位洞察：当表现数据按认知、互动与转化意图分组时，会更有决策价值。",
        strategy:
          "占位策略：建立指标层级，并为每组指标配上面向决策的解释。",
        execution:
          "占位执行：起草汇报结构，识别关键信号，并为未来测试提出建议。",
        impact:
          "占位结果：未来会展示 analytics 如何支持更清晰的传播规划。",
      },
      "zh-TW": {
        title: "Good to Go Campaign",
        shortDescription:
          "用於把表現資料轉譯成傳播判斷與下一步建議的案例佔位。",
        category: "資料分析",
        role: "分析、簡報、洞察寫作",
        tools: ["資料看板復盤", "KPI 框架", "洞察綜合"],
        tags: ["資料分析", "報告", "決策"],
        challenge:
          "佔位挑戰：傳播活動指標需要從總結性報告進入策略性解讀。",
        insight:
          "佔位洞察：當表現資料按認知、互動與轉化意圖分組時，會更有決策價值。",
        strategy:
          "佔位策略：建立指標層級，並為每組指標配上面向決策的解釋。",
        execution:
          "佔位執行：起草簡報結構，識別關鍵訊號，並為未來測試提出建議。",
        impact:
          "佔位成果：未來會展示 analytics 如何支持更清晰的傳播規劃。",
      },
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(currentSlug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);

  if (currentIndex === -1) {
    return null;
  }

  return projects[(currentIndex + 1) % projects.length];
}
