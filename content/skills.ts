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
      note: "围绕可衡量获客目标组织预算、受众与信息结构。",
      folio: "获客 / 测试 / 放量",
      summary:
        "广告投放用于支持需要清晰受众、可衡量预算与转化路径的获客活动。我用它把受众策略、渠道搭建、测试节奏和效果分析连接起来。",
      tools: [
        {
          name: "Google Ads",
          description:
            "用于搜索广告管理、关键词优化与投放效果衡量。",
          icon: "advertising",
        },
        {
          name: "Meta Ads",
          description:
            "用于付费社交受众测试、创意迭代与转化型广告搭建。",
          icon: "advertising",
        },
        {
          name: "YouTube Ads",
          description:
            "用于视频广告规划、受众触达与认知到转化目标的效果复盘。",
          icon: "content",
        },
        {
          name: "Google Analytics",
          description:
            "用于分析付费媒体路径中的流量、转化与 campaign 质量。",
          icon: "analytics",
        },
      ],
      detailKicker: "获客实践",
      details: [
        {
          name: "渠道规划",
          description:
            "将业务目标转化为媒体组合、上线顺序与预算分配。",
        },
        {
          name: "广告架构",
          description:
            "围绕意图、漏斗阶段、受众质量与学习速度搭建账户结构。",
        },
        {
          name: "搜索广告",
          description:
            "管理关键词策略、广告组映射、匹配方式、搜索词清理与落地页匹配。",
        },
        {
          name: "社交广告",
          description:
            "处理创意测试、受众细分、再营销逻辑与 offer-message 匹配。",
        },
        {
          name: "预算节奏",
          description:
            "监测花费、效率与转化量，让实验可以在不偏离目标的情况下放量。",
        },
        {
          name: "转化优化",
          description:
            "结合广告、表单、页面与漏斗信号，提升获客质量。",
        },
      ],
    }, {
      title: "廣告投放",
      titleLines: ["廣告", "投放"],
      rubric: "廣告",
      note: "圍繞可衡量獲客目標組織預算、受眾與訊息架構。",
      folio: "獲客 / 測試 / 放量",
      summary:
        "廣告投放用於支持需要清晰受眾、可衡量預算與轉化路徑的獲客活動。我用它把受眾策略、渠道搭建、測試節奏和成效分析連接起來。",
      tools: [
        {
          name: "Google Ads",
          description:
            "用於搜尋廣告管理、關鍵字優化與投放成效衡量。",
          icon: "advertising",
        },
        {
          name: "Meta Ads",
          description:
            "用於付費社群受眾測試、創意迭代與轉化型廣告搭建。",
          icon: "advertising",
        },
        {
          name: "YouTube Ads",
          description:
            "用於影片廣告規劃、受眾觸達與認知到轉化目標的成效復盤。",
          icon: "content",
        },
        {
          name: "Google Analytics",
          description:
            "用於分析付費媒體路徑中的流量、轉化與 campaign 品質。",
          icon: "analytics",
        },
      ],
      detailKicker: "獲客實踐",
      details: [
        {
          name: "渠道規劃",
          description:
            "將業務目標轉化為媒體組合、上線順序與預算分配。",
        },
        {
          name: "廣告架構",
          description:
            "圍繞意圖、漏斗階段、受眾品質與學習速度搭建帳戶結構。",
        },
        {
          name: "搜尋廣告",
          description:
            "管理關鍵字策略、廣告組映射、匹配方式、搜尋詞清理與落地頁匹配。",
        },
        {
          name: "社群廣告",
          description:
            "處理創意測試、受眾細分、再行銷邏輯與 offer-message 匹配。",
        },
        {
          name: "預算節奏",
          description:
            "監測花費、效率與轉化量，讓實驗可以在不偏離目標的情況下放量。",
        },
        {
          name: "轉化優化",
          description:
            "結合廣告、表單、頁面與漏斗訊號，提升獲客品質。",
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
      note: "为增长决策建立清晰、可读、可执行的衡量系统。",
      folio: "归因 / 看板 / 洞察",
      summary:
        "市场营销分析把 campaign 活动转化为可用于判断的证据。我用它建立汇报逻辑、解读表现信号，并把数据转化为下一步建议。",
      tools: [
        {
          name: "SQL",
          description:
            "用于营销数据查询、报告整理与 campaign 表现分析。",
          icon: "data",
        },
        {
          name: "Python",
          description:
            "用于数据清理、轻量分析与可重复的报告流程。",
          icon: "automation",
        },
        {
          name: "R 语言",
          description:
            "用于统计分析、结构化探索与偏研究型的数据复盘。",
          icon: "analytics",
        },
        {
          name: "Google Analytics",
          description:
            "用于流量来源分析、转化复盘与受众行为报告。",
          icon: "analytics",
        },
        {
          name: "Microsoft Office",
          description:
            "用于洞察整理、报告表格与面向 stakeholder 的分析材料。",
          icon: "document",
        },
      ],
      detailKicker: "衡量实践",
      details: [
        {
          name: "衡量规划",
          description:
            "在 campaign 上线前定义事件、目标、来源逻辑与报告层级。",
        },
        {
          name: "漏斗分析",
          description:
            "定位访客、线索与客户路径中的流失、延迟与质量变化。",
        },
        {
          name: "看板设计",
          description:
            "把分散指标整理成适合周度决策与汇报的可读视图。",
        },
        {
          name: "归因复盘",
          description:
            "比较平台、分析工具与 CRM 信号，而不把单一报告当作绝对事实。",
        },
        {
          name: "实验解读",
          description:
            "结合背景、限制、信心程度与下一步决策总结测试结果。",
        },
        {
          name: "追踪 QA",
          description:
            "检查 UTM 标准、事件捕捉、转化路径与报告一致性。",
        },
      ],
    }, {
      title: "市場行銷分析",
      titleLines: ["市場行銷", "分析"],
      rubric: "分析",
      note: "為成長決策建立清晰、可讀、可執行的衡量系統。",
      folio: "歸因 / 看板 / 洞察",
      summary:
        "市場行銷分析把 campaign 活動轉化為可用於判斷的證據。我用它建立報告邏輯、解讀表現訊號，並把資料轉化為下一步建議。",
      tools: [
        {
          name: "SQL",
          description:
            "用於行銷資料查詢、報告整理與 campaign 表現分析。",
          icon: "data",
        },
        {
          name: "Python",
          description:
            "用於資料清理、輕量分析與可重複的報告流程。",
          icon: "automation",
        },
        {
          name: "R 語言",
          description:
            "用於統計分析、結構化探索與偏研究型的資料復盤。",
          icon: "analytics",
        },
        {
          name: "Google Analytics",
          description:
            "用於流量來源分析、轉化復盤與受眾行為報告。",
          icon: "analytics",
        },
        {
          name: "Microsoft Office",
          description:
            "用於洞察整理、報告表格與面向 stakeholder 的分析材料。",
          icon: "document",
        },
      ],
      detailKicker: "衡量實踐",
      details: [
        {
          name: "衡量規劃",
          description:
            "在 campaign 上線前定義事件、目標、來源邏輯與報告層級。",
        },
        {
          name: "漏斗分析",
          description:
            "定位訪客、線索與客戶路徑中的流失、延遲與品質變化。",
        },
        {
          name: "看板設計",
          description:
            "把分散指標整理成適合週度決策與匯報的可讀視圖。",
        },
        {
          name: "歸因復盤",
          description:
            "比較平台、分析工具與 CRM 訊號，而不把單一報告當作絕對事實。",
        },
        {
          name: "實驗解讀",
          description:
            "結合背景、限制、信心程度與下一步決策總結測試結果。",
        },
        {
          name: "追蹤 QA",
          description:
            "檢查 UTM 標準、事件捕捉、轉化路徑與報告一致性。",
        },
      ],
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
      note: "连接搜索可见度、内容意图与可持续增长路径。",
      folio: "搜索 / 内容 / CRO",
      summary:
        "SEO 与增长把自然搜索可见度、内容结构和转化路径连接起来。我用它识别需求、优化页面，并建立能够持续积累的发现系统。",
      tools: [
        {
          name: "Semrush",
          description:
            "用于关键词研究、竞品分析与 SEO 机会识别。",
          icon: "search",
        },
        {
          name: "Google Search Console",
          description:
            "用于搜索表现复盘、索引检查与 query 层面的优化。",
          icon: "search",
        },
        {
          name: "Google Analytics",
          description:
            "用于自然流量行为、转化路径与落地页表现分析。",
          icon: "analytics",
        },
        {
          name: "WordPress",
          description:
            "用于内容发布、页面更新、metadata 编辑与网站结构支持。",
          icon: "web",
        },
      ],
      detailKicker: "自然增长实践",
      details: [
        {
          name: "关键词研究",
          description:
            "根据意图、竞争程度与业务价值识别相关搜索机会。",
        },
        {
          name: "技术 SEO 检查",
          description:
            "检查可抓取性、索引、内链、metadata、速度与结构化内容健康度。",
        },
        {
          name: "内容 Brief",
          description:
            "创建连接搜索意图、品牌观点与转化目标的内容 brief。",
        },
        {
          name: "页面优化",
          description:
            "优化页面层级、标题、metadata、内链与回答质量。",
        },
        {
          name: "增长实验",
          description:
            "围绕 offer、落地页、表单与流量路径设计轻量测试。",
        },
        {
          name: "搜索表现分析",
          description:
            "把排名、曝光、点击率与辅助转化作为一个整体运营图景来解读。",
        },
      ],
    }, {
      title: "SEO 與增長",
      titleLines: ["SEO", "與增長"],
      rubric: "搜尋",
      note: "連接搜尋可見度、內容意圖與可持續成長路徑。",
      folio: "搜尋 / 內容 / CRO",
      summary:
        "SEO 與增長把自然搜尋可見度、內容結構和轉化路徑連接起來。我用它識別需求、優化頁面，並建立能夠持續累積的發現系統。",
      tools: [
        {
          name: "Semrush",
          description:
            "用於關鍵字研究、競品分析與 SEO 機會識別。",
          icon: "search",
        },
        {
          name: "Google Search Console",
          description:
            "用於搜尋表現復盤、索引檢查與 query 層面的優化。",
          icon: "search",
        },
        {
          name: "Google Analytics",
          description:
            "用於自然流量行為、轉化路徑與落地頁表現分析。",
          icon: "analytics",
        },
        {
          name: "WordPress",
          description:
            "用於內容發布、頁面更新、metadata 編輯與網站結構支持。",
          icon: "web",
        },
      ],
      detailKicker: "自然成長實踐",
      details: [
        {
          name: "關鍵字研究",
          description:
            "根據意圖、競爭程度與業務價值識別相關搜尋機會。",
        },
        {
          name: "技術 SEO 檢查",
          description:
            "檢查可抓取性、索引、內鏈、metadata、速度與結構化內容健康度。",
        },
        {
          name: "內容 Brief",
          description:
            "建立連接搜尋意圖、品牌觀點與轉化目標的內容 brief。",
        },
        {
          name: "頁面優化",
          description:
            "優化頁面層級、標題、metadata、內鏈與回答品質。",
        },
        {
          name: "成長實驗",
          description:
            "圍繞 offer、落地頁、表單與流量路徑設計輕量測試。",
        },
        {
          name: "搜尋表現分析",
          description:
            "把排名、曝光、點擊率與輔助轉化作為一個整體營運圖景來解讀。",
        },
      ],
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
      note: "用市场背景、受众洞察与信息逻辑支撑传播判断。",
      folio: "受众 / 市场 / 叙事",
      summary:
        "策略规划定义 campaign 执行前的核心判断。我用研究、受众语境和竞品信号来塑造定位、信息结构与传播计划。",
      tools: [
        {
          name: "Desk Research",
          description:
            "用于收集市场、受众与竞品背景，支持策略判断。",
          icon: "research",
        },
        {
          name: "Google Forms",
          description:
            "用于轻量问卷收集、受众反馈与结构化回答整理。",
          icon: "document",
        },
        {
          name: "Google Trends",
          description:
            "用于需求趋势观察、话题验证与传播时机判断。",
          icon: "search",
        },
        {
          name: "Microsoft Office",
          description:
            "用于规划文档、研究综合与可汇报的策略叙事。",
          icon: "strategy",
        },
      ],
      detailKicker: "策略实践",
      details: [
        {
          name: "市场研究",
          description:
            "从受众行为、品类规律、竞品动作与用户语言中提炼模式。",
        },
        {
          name: "竞品分析",
          description:
            "研究定位、offer 设计、渠道组合、信息表达与空白机会。",
        },
        {
          name: "受众细分",
          description:
            "根据需求、动机、购买触发点与准备程度定义受众分组。",
        },
        {
          name: "用户旅程",
          description:
            "把认知、考虑、决策与留存阶段连接成清晰路径。",
        },
        {
          name: "信息策略",
          description:
            "打磨价值主张、证据点、用户顾虑与 campaign 叙事。",
        },
        {
          name: "规划工作坊",
          description:
            "把 stakeholder 输入转化为优先级、假设与执行方向。",
        },
      ],
    }, {
      title: "策略規劃",
      titleLines: ["策略", "規劃"],
      rubric: "策略",
      note: "用市場背景、受眾洞察與訊息邏輯支撐傳播判斷。",
      folio: "受眾 / 市場 / 敘事",
      summary:
        "策略規劃定義 campaign 執行前的核心判斷。我用研究、受眾語境和競品訊號來塑造定位、訊息結構與傳播計畫。",
      tools: [
        {
          name: "Desk Research",
          description:
            "用於收集市場、受眾與競品背景，支持策略判斷。",
          icon: "research",
        },
        {
          name: "Google Forms",
          description:
            "用於輕量問卷收集、受眾回饋與結構化回答整理。",
          icon: "document",
        },
        {
          name: "Google Trends",
          description:
            "用於需求趨勢觀察、話題驗證與傳播時機判斷。",
          icon: "search",
        },
        {
          name: "Microsoft Office",
          description:
            "用於規劃文件、研究綜合與可匯報的策略敘事。",
          icon: "strategy",
        },
      ],
      detailKicker: "策略實踐",
      details: [
        {
          name: "市場研究",
          description:
            "從受眾行為、品類規律、競品動作與使用者語言中提煉模式。",
        },
        {
          name: "競品分析",
          description:
            "研究定位、offer 設計、渠道組合、訊息表達與空白機會。",
        },
        {
          name: "受眾細分",
          description:
            "根據需求、動機、購買觸發點與準備程度定義受眾分組。",
        },
        {
          name: "使用者旅程",
          description:
            "把認知、考慮、決策與留存階段連接成清晰路徑。",
        },
        {
          name: "訊息策略",
          description:
            "打磨價值主張、證據點、使用者顧慮與 campaign 敘事。",
        },
        {
          name: "規劃工作坊",
          description:
            "把 stakeholder 輸入轉化為優先級、假設與執行方向。",
        },
      ],
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
      note: "用页面、工作流与轻量系统支持更顺畅的营销执行。",
      folio: "页面 / 表单 / 流程",
      summary:
        "网站技术与自动化支撑更清晰的营销运营系统。我用它搭建页面、组织工作流，并减少内容、表单与数据交接中的重复劳动。",
      tools: [
        {
          name: "WordPress",
          description:
            "用于营销页面更新、CMS 组织与 campaign 内容发布。",
          icon: "web",
        },
        {
          name: "Python",
          description:
            "用于数据清理、重复任务处理与轻量工作流支持。",
          icon: "automation",
        },
        {
          name: "AI 助手",
          description:
            "用于草稿支持、流程构思、内容运营与结构化任务加速。",
          icon: "automation",
        },
        {
          name: "表单流程",
          description:
            "用于提交路由、线索收集结构与后续跟进流程整理。",
          icon: "document",
        },
      ],
      detailKicker: "系统实践",
      details: [
        {
          name: "落地页系统",
          description:
            "围绕 offer 清晰度、证据、转化路径与 campaign 适配设计页面结构。",
        },
        {
          name: "表单流程",
          description:
            "规划提交路由、降低填写阻力、捕捉上下文并保持跟进可靠。",
        },
        {
          name: "营销自动化",
          description:
            "搭建简单序列、提醒、交接与常用工具之间的数据流转。",
        },
        {
          name: "CMS 运营",
          description:
            "组织可复用内容、页面更新、metadata 与发布流程。",
        },
        {
          name: "集成映射",
          description:
            "梳理线索、事件、名单与 campaign 数据在系统之间的传递方式。",
        },
        {
          name: "QA 与维护",
          description:
            "检查表单、链接、分析事件、响应式表现与上线准备度。",
        },
      ],
    }, {
      title: "網站技術與自動化",
      titleLines: ["網站技術", "與自動化"],
      rubric: "自動化",
      note: "用頁面、工作流與輕量系統支持更順暢的行銷執行。",
      folio: "頁面 / 表單 / 流程",
      summary:
        "網站技術與自動化支撐更清晰的行銷營運系統。我用它搭建頁面、組織工作流，並減少內容、表單與資料交接中的重複勞動。",
      tools: [
        {
          name: "WordPress",
          description:
            "用於行銷頁面更新、CMS 組織與 campaign 內容發布。",
          icon: "web",
        },
        {
          name: "Python",
          description:
            "用於資料清理、重複任務處理與輕量工作流支持。",
          icon: "automation",
        },
        {
          name: "AI 助手",
          description:
            "用於草稿支持、流程構思、內容營運與結構化任務加速。",
          icon: "automation",
        },
        {
          name: "表單流程",
          description:
            "用於提交路由、線索收集結構與後續跟進流程整理。",
          icon: "document",
        },
      ],
      detailKicker: "系統實踐",
      details: [
        {
          name: "落地頁系統",
          description:
            "圍繞 offer 清晰度、證據、轉化路徑與 campaign 適配設計頁面結構。",
        },
        {
          name: "表單流程",
          description:
            "規劃提交路由、降低填寫阻力、捕捉上下文並保持跟進可靠。",
        },
        {
          name: "行銷自動化",
          description:
            "搭建簡單序列、提醒、交接與常用工具之間的資料流轉。",
        },
        {
          name: "CMS 營運",
          description:
            "組織可復用內容、頁面更新、metadata 與發布流程。",
        },
        {
          name: "整合映射",
          description:
            "梳理線索、事件、名單與 campaign 資料在系統之間的傳遞方式。",
        },
        {
          name: "QA 與維護",
          description:
            "檢查表單、連結、分析事件、響應式表現與上線準備度。",
        },
      ],
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
      note: "把策略转化为清晰、有记忆点、可执行的内容与创意资产。",
      folio: "文案 / 概念 / 资产",
      summary:
        "内容创作把策略转化为用户能够理解和互动的信息、概念与资产。我用它塑造 campaign、撰写文案、协调制作并复盘创意表现。",
      tools: [
        {
          name: "Canva",
          description:
            "用于快速视觉排版、campaign 资产与可展示的创意草稿。",
          icon: "content",
        },
        {
          name: "CapCut",
          description:
            "用于短视频剪辑、社交内容组装与轻量动效编辑。",
          icon: "content",
        },
        {
          name: "Final Cut Pro",
          description:
            "用于视频剪辑、时间线精修与更完整的 campaign 内容制作。",
          icon: "content",
        },
        {
          name: "Microsoft Office",
          description:
            "用于创意 brief、文案草稿、内容日历与 stakeholder 审阅文档。",
          icon: "document",
        },
      ],
      detailKicker: "内容实践",
      details: [
        {
          name: "创意 Brief",
          description:
            "在制作开始前明确受众、offer、信息、证据、限制与交付物。",
        },
        {
          name: "广告概念",
          description:
            "发展可以适配不同格式、受众与测试计划的 campaign idea。",
        },
        {
          name: "文案写作",
          description:
            "撰写标题、广告文案、落地页段落、邮件文案与简洁产品表达。",
        },
        {
          name: "制作规划",
          description:
            "协调资产清单、时间节点、格式需求、审阅轮次与上线依赖。",
        },
        {
          name: "资产 QA",
          description:
            "检查文案、尺寸、层级、跳转链接、命名与 campaign 一致性。",
        },
        {
          name: "创意分析",
          description:
            "阅读表现模式，识别值得继续投入的信息、hook 与内容格式。",
        },
      ],
    }, {
      title: "內容創作",
      titleLines: ["內容", "創作"],
      rubric: "內容",
      note: "把策略轉化為清晰、有記憶點、可執行的內容與創意資產。",
      folio: "文案 / 概念 / 資產",
      summary:
        "內容創作把策略轉化為使用者能夠理解和互動的訊息、概念與資產。我用它塑造 campaign、撰寫文案、協調製作並復盤創意表現。",
      tools: [
        {
          name: "Canva",
          description:
            "用於快速視覺排版、campaign 資產與可展示的創意草稿。",
          icon: "content",
        },
        {
          name: "CapCut",
          description:
            "用於短影音剪輯、社群內容組裝與輕量動效編輯。",
          icon: "content",
        },
        {
          name: "Final Cut Pro",
          description:
            "用於影片剪輯、時間線精修與更完整的 campaign 內容製作。",
          icon: "content",
        },
        {
          name: "Microsoft Office",
          description:
            "用於創意 brief、文案草稿、內容日曆與 stakeholder 審閱文件。",
          icon: "document",
        },
      ],
      detailKicker: "內容實踐",
      details: [
        {
          name: "創意 Brief",
          description:
            "在製作開始前明確受眾、offer、訊息、證據、限制與交付物。",
        },
        {
          name: "廣告概念",
          description:
            "發展可以適配不同格式、受眾與測試計畫的 campaign idea。",
        },
        {
          name: "文案寫作",
          description:
            "撰寫標題、廣告文案、落地頁段落、郵件文案與簡潔產品表達。",
        },
        {
          name: "製作規劃",
          description:
            "協調資產清單、時間節點、格式需求、審閱輪次與上線依賴。",
        },
        {
          name: "資產 QA",
          description:
            "檢查文案、尺寸、層級、跳轉連結、命名與 campaign 一致性。",
        },
        {
          name: "創意分析",
          description:
            "閱讀表現模式，識別值得繼續投入的訊息、hook 與內容格式。",
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
