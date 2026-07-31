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
  meta?: string;
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
  toolsTitle?: string;
  toolsDescription?: string;
  capabilitiesTitle?: string;
  capabilitiesDescription?: string;
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
    title: "Six marketing capability fields",
    description:
      "A poster index of Kristy's marketing, analytics, growth, strategy, technical, and creative practice.",
  },
  "zh-CN": {
    eyebrow: "技能",
    title: "六个营销能力领域",
    description:
      "以作品集海报的方式呈现 Kristy 的广告投放、市场营销分析、增长策略、AI 技术与内容创作能力。",
  },
  "zh-TW": {
    eyebrow: "技能",
    title: "六個行銷能力領域",
    description:
      "以作品集海報的方式呈現 Kristy 的廣告投放、市場行銷分析、成長策略、AI 技術與內容創作能力。",
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
      "The platforms and working tools I use to turn marketing strategy into practical execution.",
    capabilitiesTitle: "Capabilities",
    capabilitiesDescription:
      "The practical marketing and analytical work behind this capability area.",
  },
  "zh-CN": {
    backLabel: "技能索引",
    toolsTitle: "核心工具",
    toolsDescription:
      "我用来把营销策略转化为实际执行的平台与工作工具。",
    capabilitiesTitle: "能力范围",
    capabilitiesDescription:
      "这个能力领域中实际承担的营销、分析与优化工作。",
  },
  "zh-TW": {
    backLabel: "技能索引",
    toolsTitle: "核心工具",
    toolsDescription:
      "我用來把行銷策略轉化為實際執行的平台與工作工具。",
    capabilitiesTitle: "能力範圍",
    capabilitiesDescription:
      "這個能力領域中實際承擔的行銷、分析與優化工作。",
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
      rubric: "Paid",
      note: "Paid acquisition shaped by goals, audience, budget, and reporting discipline.",
      folio: "Campaigns / Testing / Reporting",
      summary:
        "Performance marketing connects channel setup, audience logic, budget control, and reporting so paid campaigns can be planned, tested, and improved with accountability.",
      tools: [
        {
          name: "Google Ads",
          description:
            "Search campaign setup, keyword management, and conversion-focused performance review.",
          icon: "advertising",
        },
        {
          name: "Meta Ads",
          description:
            "Paid social campaign setup, audience testing, and creative performance review.",
          icon: "advertising",
        },
        {
          name: "TikTok Ads",
          description:
            "Short-form paid media testing, audience reach, and campaign performance tracking.",
          icon: "advertising",
        },
        {
          name: "Google Analytics",
          description:
            "Traffic, conversion, and campaign quality analysis across paid media journeys.",
          icon: "analytics",
        },
      ],
      detailKicker: "Paid acquisition",
      details: [
        {
          name: "Campaign Planning",
          description:
            "Structure campaigns around business goals, audiences, channels, and conversion objectives.",
        },
        {
          name: "Audience Targeting",
          description:
            "Define and refine audience segments based on behavior, intent, and campaign response.",
        },
        {
          name: "Budget Management",
          description:
            "Monitor spend, pacing, and efficiency so campaign investment stays aligned with goals.",
        },
        {
          name: "A/B Testing",
          description:
            "Compare messages, creatives, audiences, and landing paths to identify stronger campaign directions.",
        },
        {
          name: "Performance Optimization",
          description:
            "Use conversion, cost, quality, and engagement signals to improve paid campaign results.",
        },
        {
          name: "Campaign Reporting",
          description:
            "Translate platform and analytics data into clear performance summaries and next actions.",
        },
      ],
    }, {
      title: "广告投放",
      titleLines: ["广告", "投放"],
      rubric: "投放",
      note: "围绕目标、受众、预算与报告纪律展开的付费获客能力。",
      folio: "广告活动 / 测试 / 报告",
      summary:
        "广告投放连接渠道搭建、受众逻辑、预算控制与效果报告，让付费 campaign 能够被清晰规划、测试和持续优化。",
      tools: [
        {
          name: "Google Ads",
          description:
            "用于搜索广告搭建、关键词管理与转化导向的效果复盘。",
          icon: "advertising",
        },
        {
          name: "Meta Ads",
          description:
            "用于付费社交广告搭建、受众测试与创意表现复盘。",
          icon: "advertising",
        },
        {
          name: "TikTok Ads",
          description:
            "用于短视频付费媒体测试、受众触达与 campaign 效果追踪。",
          icon: "advertising",
        },
        {
          name: "Google Analytics",
          description:
            "用于分析付费媒体路径中的流量、转化与 campaign 质量。",
          icon: "analytics",
        },
      ],
      detailKicker: "付费获客",
      details: [
        {
          name: "广告活动规划",
          description:
            "围绕业务目标、受众、渠道与转化目标搭建 campaign 结构。",
        },
        {
          name: "受众定位",
          description:
            "根据行为、意图与 campaign 反馈定义并优化受众分组。",
        },
        {
          name: "预算管理",
          description:
            "监测花费、投放节奏与效率，让预算投入始终对齐目标。",
        },
        {
          name: "A/B 测试",
          description:
            "比较信息、创意、受众与落地路径，识别更有效的投放方向。",
        },
        {
          name: "效果优化",
          description:
            "结合转化、成本、质量与互动信号改进 paid campaign 表现。",
        },
        {
          name: "Campaign 报告",
          description:
            "把平台与分析数据转化为清晰的表现总结和下一步行动。",
        },
      ],
    }, {
      title: "廣告投放",
      titleLines: ["廣告", "投放"],
      rubric: "投放",
      note: "圍繞目標、受眾、預算與報告紀律展開的付費獲客能力。",
      folio: "廣告活動 / 測試 / 報告",
      summary:
        "廣告投放連接渠道搭建、受眾邏輯、預算控制與成效報告，讓付費 campaign 能夠被清晰規劃、測試和持續優化。",
      tools: [
        {
          name: "Google Ads",
          description:
            "用於搜尋廣告搭建、關鍵字管理與轉化導向的成效復盤。",
          icon: "advertising",
        },
        {
          name: "Meta Ads",
          description:
            "用於付費社群廣告搭建、受眾測試與創意表現復盤。",
          icon: "advertising",
        },
        {
          name: "TikTok Ads",
          description:
            "用於短影音付費媒體測試、受眾觸達與 campaign 成效追蹤。",
          icon: "advertising",
        },
        {
          name: "Google Analytics",
          description:
            "用於分析付費媒體路徑中的流量、轉化與 campaign 品質。",
          icon: "analytics",
        },
      ],
      detailKicker: "付費獲客",
      details: [
        {
          name: "廣告活動規劃",
          description:
            "圍繞業務目標、受眾、渠道與轉化目標搭建 campaign 結構。",
        },
        {
          name: "受眾定位",
          description:
            "根據行為、意圖與 campaign 回饋定義並優化受眾分組。",
        },
        {
          name: "預算管理",
          description:
            "監測花費、投放節奏與效率，讓預算投入始終對齊目標。",
        },
        {
          name: "A/B 測試",
          description:
            "比較訊息、創意、受眾與落地路徑，識別更有效的投放方向。",
        },
        {
          name: "成效優化",
          description:
            "結合轉化、成本、品質與互動訊號改進 paid campaign 表現。",
        },
        {
          name: "Campaign 報告",
          description:
            "把平台與分析資料轉化為清晰的表現總結和下一步行動。",
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
      rubric: "Data",
      note: "Campaign data translated into reporting, insight, and practical decisions.",
      folio: "Measurement / Reporting / Insight",
      summary:
        "Marketing analytics turns campaign activity into evidence for decisions. I use analytics tools, query logic, and reporting workflows to understand performance and communicate what should happen next.",
      tools: [
        {
          name: "Google Analytics",
          description:
            "Traffic source analysis, conversion review, and audience behavior reporting.",
          icon: "analytics",
        },
        {
          name: "SQL",
          description:
            "Marketing data querying, reporting, and campaign performance analysis.",
          icon: "data",
        },
        {
          name: "Python",
          description:
            "Lightweight marketing analysis, repeatable reporting tasks, and data workflow support.",
          icon: "automation",
        },
        {
          name: "R",
          description:
            "Statistical review and research-oriented analysis for marketing datasets.",
          icon: "analytics",
        },
      ],
      detailKicker: "Marketing measurement",
      details: [
        {
          name: "Campaign Measurement",
          description:
            "Define and read campaign metrics across traffic, conversion, cost, and audience quality.",
        },
        {
          name: "Pivot Table Reporting",
          description:
            "Organize campaign data into pivot-based views for channel, campaign, and performance comparisons.",
        },
        {
          name: "Performance Reporting",
          description:
            "Build concise reporting views that show what changed, why it matters, and what to do next.",
        },
        {
          name: "Marketing Insights",
          description:
            "Translate patterns in campaign and audience data into practical recommendations.",
        },
        {
          name: "Data Visualization",
          description:
            "Turn marketing metrics into readable charts and summaries for faster decision-making.",
        },
      ],
    }, {
      title: "市场营销分析",
      titleLines: ["市场营销", "分析"],
      rubric: "数据",
      note: "把 campaign 数据转化为报告、洞察与实际决策。",
      folio: "衡量 / 报告 / 洞察",
      summary:
        "市场营销分析把 campaign 活动转化为决策依据。我使用分析工具、查询逻辑与报告流程来理解表现，并清晰说明下一步应该怎么做。",
      tools: [
        {
          name: "Google Analytics",
          description:
            "用于流量来源分析、转化复盘与受众行为报告。",
          icon: "analytics",
        },
        {
          name: "SQL",
          description:
            "用于营销数据查询、报告整理与 campaign 表现分析。",
          icon: "data",
        },
        {
          name: "Python",
          description:
            "用于轻量营销分析、可重复报告任务与数据流程支持。",
          icon: "automation",
        },
        {
          name: "R",
          description:
            "用于营销数据集的统计复盘与偏研究型分析。",
          icon: "analytics",
        },
      ],
      detailKicker: "营销衡量",
      details: [
        {
          name: "Campaign 衡量",
          description:
            "围绕流量、转化、成本与受众质量定义并解读 campaign 指标。",
        },
        {
          name: "数据透视表报告",
          description:
            "用透视表整理 campaign 数据，比较渠道、活动与表现差异。",
        },
        {
          name: "效果报告",
          description:
            "建立简洁报告视图，说明发生了什么、为什么重要以及下一步行动。",
        },
        {
          name: "营销洞察",
          description:
            "把 campaign 与受众数据中的模式转化为实际建议。",
        },
        {
          name: "数据可视化",
          description:
            "把营销指标转化为易读图表与摘要，支持更快决策。",
        },
      ],
    }, {
      title: "市場行銷分析",
      titleLines: ["市場行銷", "分析"],
      rubric: "資料",
      note: "把 campaign 資料轉化為報告、洞察與實際決策。",
      folio: "衡量 / 報告 / 洞察",
      summary:
        "市場行銷分析把 campaign 活動轉化為決策依據。我使用分析工具、查詢邏輯與報告流程來理解表現，並清晰說明下一步應該怎麼做。",
      tools: [
        {
          name: "Google Analytics",
          description:
            "用於流量來源分析、轉化復盤與受眾行為報告。",
          icon: "analytics",
        },
        {
          name: "SQL",
          description:
            "用於行銷資料查詢、報告整理與 campaign 表現分析。",
          icon: "data",
        },
        {
          name: "Python",
          description:
            "用於輕量行銷分析、可重複報告任務與資料流程支持。",
          icon: "automation",
        },
        {
          name: "R",
          description:
            "用於行銷資料集的統計復盤與偏研究型分析。",
          icon: "analytics",
        },
      ],
      detailKicker: "行銷衡量",
      details: [
        {
          name: "Campaign 衡量",
          description:
            "圍繞流量、轉化、成本與受眾品質定義並解讀 campaign 指標。",
        },
        {
          name: "樞紐分析表報告",
          description:
            "用樞紐分析表整理 campaign 資料，比較渠道、活動與表現差異。",
        },
        {
          name: "成效報告",
          description:
            "建立簡潔報告視圖，說明發生了什麼、為什麼重要以及下一步行動。",
        },
        {
          name: "行銷洞察",
          description:
            "把 campaign 與受眾資料中的模式轉化為實際建議。",
        },
        {
          name: "資料視覺化",
          description:
            "把行銷指標轉化為易讀圖表與摘要，支持更快決策。",
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
      rubric: "Search",
      note: "Organic visibility shaped by search intent, content quality, and growth logic.",
      folio: "Search / Content / Growth",
      summary:
        "SEO and growth work connects organic search visibility with content structure, audience demand, and practical growth opportunities.",
      tools: [
        {
          name: "Semrush",
          description:
            "Keyword research, competitor analysis, and SEO opportunity discovery.",
          icon: "search",
        },
        {
          name: "WordPress",
          description:
            "Content publishing, on-page updates, metadata edits, and site structure support.",
          icon: "web",
        },
      ],
      detailKicker: "Organic growth",
      details: [
        {
          name: "Keyword Research",
          description:
            "Identify relevant search opportunities based on intent, competition, and business value.",
        },
        {
          name: "Search Intent Analysis",
          description:
            "Read what audiences are trying to solve and align content direction with that intent.",
        },
        {
          name: "Content Optimization",
          description:
            "Improve page structure, messaging, and metadata for stronger organic visibility.",
        },
        {
          name: "Competitor Analysis",
          description:
            "Review competitor content, positioning, and search coverage to find practical gaps.",
        },
        {
          name: "Organic Growth Strategy",
          description:
            "Connect search demand, content priorities, and conversion paths into a sustainable growth plan.",
        },
      ],
    }, {
      title: "SEO 与增长",
      titleLines: ["SEO", "与增长"],
      rubric: "搜索",
      note: "围绕搜索意图、内容质量与增长逻辑提升自然可见度。",
      folio: "搜索 / 内容 / 增长",
      summary:
        "SEO 与增长把自然搜索可见度、内容结构、受众需求与实际增长机会连接起来。",
      tools: [
        {
          name: "Semrush",
          description:
            "用于关键词研究、竞品分析与 SEO 机会识别。",
          icon: "search",
        },
        {
          name: "WordPress",
          description:
            "用于内容发布、页面更新、metadata 编辑与网站结构支持。",
          icon: "web",
        },
      ],
      detailKicker: "自然增长",
      details: [
        {
          name: "关键词研究",
          description:
            "根据意图、竞争程度与业务价值识别相关搜索机会。",
        },
        {
          name: "搜索意图分析",
          description:
            "理解受众真正想解决的问题，并让内容方向与搜索意图对齐。",
        },
        {
          name: "内容优化",
          description:
            "优化页面结构、信息表达与 metadata，提升自然搜索可见度。",
        },
        {
          name: "竞品分析",
          description:
            "复盘竞品内容、定位与搜索覆盖，找到可执行的机会缺口。",
        },
        {
          name: "自然增长策略",
          description:
            "把搜索需求、内容优先级与转化路径连接成可持续的增长计划。",
        },
      ],
    }, {
      title: "SEO 與增長",
      titleLines: ["SEO", "與增長"],
      rubric: "搜尋",
      note: "圍繞搜尋意圖、內容品質與成長邏輯提升自然可見度。",
      folio: "搜尋 / 內容 / 成長",
      summary:
        "SEO 與增長把自然搜尋可見度、內容結構、受眾需求與實際成長機會連接起來。",
      tools: [
        {
          name: "Semrush",
          description:
            "用於關鍵字研究、競品分析與 SEO 機會識別。",
          icon: "search",
        },
        {
          name: "WordPress",
          description:
            "用於內容發布、頁面更新、metadata 編輯與網站結構支持。",
          icon: "web",
        },
      ],
      detailKicker: "自然成長",
      details: [
        {
          name: "關鍵字研究",
          description:
            "根據意圖、競爭程度與業務價值識別相關搜尋機會。",
        },
        {
          name: "搜尋意圖分析",
          description:
            "理解受眾真正想解決的問題，並讓內容方向與搜尋意圖對齊。",
        },
        {
          name: "內容優化",
          description:
            "優化頁面結構、訊息表達與 metadata，提升自然搜尋可見度。",
        },
        {
          name: "競品分析",
          description:
            "復盤競品內容、定位與搜尋覆蓋，找到可執行的機會缺口。",
        },
        {
          name: "自然成長策略",
          description:
            "把搜尋需求、內容優先級與轉化路徑連接成可持續的成長計畫。",
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
      note: "Research and planning logic that makes marketing decisions sharper.",
      folio: "Research / Audience / Planning",
      summary:
        "Strategy and insights work clarifies audiences, market context, competitive signals, and planning decisions before campaigns move into execution.",
      toolsTitle: "Core Competencies",
      toolsDescription:
        "The research and planning competencies I use to shape marketing decisions before execution.",
      tools: [
        {
          name: "Consumer Research",
          description:
            "Understand consumer needs, motivations, barriers, and decision triggers.",
        },
        {
          name: "Market Research",
          description:
            "Review market context, category behavior, and demand signals that shape strategy.",
        },
        {
          name: "Competitor Analysis",
          description:
            "Study competitor positioning, messaging, channels, and opportunity gaps.",
        },
        {
          name: "Audience Segmentation",
          description:
            "Group audiences by needs, behaviors, intent, and readiness to act.",
        },
        {
          name: "Campaign Planning",
          description:
            "Translate goals, audience insights, and channel priorities into campaign direction.",
        },
        {
          name: "Marketing Strategy",
          description:
            "Shape positioning, messaging, and tactical priorities around business and audience context.",
        },
      ],
      detailKicker: "Strategic planning",
      details: [],
    }, {
      title: "策略规划",
      titleLines: ["策略", "规划"],
      rubric: "策略",
      note: "用研究与规划逻辑提升营销判断的清晰度。",
      folio: "研究 / 受众 / 规划",
      summary:
        "策略规划在 campaign 进入执行前，帮助厘清受众、市场背景、竞品信号与传播决策。",
      toolsTitle: "核心能力",
      toolsDescription:
        "这些研究与规划能力用于在执行前支持更清晰的营销决策。",
      tools: [
        {
          name: "消费者研究",
          description:
            "理解消费者需求、动机、阻碍与决策触发点。",
        },
        {
          name: "市场研究",
          description:
            "复盘市场背景、品类行为与影响策略的需求信号。",
        },
        {
          name: "竞品分析",
          description:
            "研究竞品定位、信息表达、渠道选择与机会缺口。",
        },
        {
          name: "受众细分",
          description:
            "根据需求、行为、意图与行动准备程度划分受众。",
        },
        {
          name: "Campaign 规划",
          description:
            "把目标、受众洞察与渠道优先级转化为 campaign 方向。",
        },
        {
          name: "营销策略",
          description:
            "围绕业务目标与受众语境塑造定位、信息与执行优先级。",
        },
      ],
      detailKicker: "策略规划",
      details: [],
    }, {
      title: "策略規劃",
      titleLines: ["策略", "規劃"],
      rubric: "策略",
      note: "用研究與規劃邏輯提升行銷判斷的清晰度。",
      folio: "研究 / 受眾 / 規劃",
      summary:
        "策略規劃在 campaign 進入執行前，幫助釐清受眾、市場背景、競品訊號與傳播決策。",
      toolsTitle: "核心能力",
      toolsDescription:
        "這些研究與規劃能力用於在執行前支持更清晰的行銷決策。",
      tools: [
        {
          name: "消費者研究",
          description:
            "理解消費者需求、動機、阻礙與決策觸發點。",
        },
        {
          name: "市場研究",
          description:
            "復盤市場背景、品類行為與影響策略的需求訊號。",
        },
        {
          name: "競品分析",
          description:
            "研究競品定位、訊息表達、渠道選擇與機會缺口。",
        },
        {
          name: "受眾細分",
          description:
            "根據需求、行為、意圖與行動準備程度劃分受眾。",
        },
        {
          name: "Campaign 規劃",
          description:
            "把目標、受眾洞察與渠道優先級轉化為 campaign 方向。",
        },
        {
          name: "行銷策略",
          description:
            "圍繞業務目標與受眾語境塑造定位、訊息與執行優先級。",
        },
      ],
      detailKicker: "策略規劃",
      details: [],
    }),
  },
  {
    slug: "web-automation",
    number: "05",
    posterClassName: "skills-poster--web",
    translations: categoryCopy({
      title: "Technical Skills",
      titleLines: ["Technical", "Skills"],
      rubric: "AI",
      note: "AI-assisted workflows and technical fluency for modern marketing operations.",
      folio: "AI / Prompts / Workflow",
      summary:
        "Technical skills support the AI-assisted workflows, prompt systems, and lightweight automation that make marketing work more structured and efficient.",
      tools: [
        {
          name: "HTML",
          description:
            "Basic markup fluency for editing content structure, email or page snippets, and technical handoffs.",
          icon: "web",
        },
        {
          name: "Python",
          description:
            "Lightweight scripting for automation, data handling, and repeatable marketing workflow support.",
          icon: "automation",
        },
        {
          name: "AI Coding Assistants",
          meta: "Cursor · Claude Code · Codex · etc.",
          description:
            "Use AI coding assistants to accelerate development, automate repetitive tasks, and improve workflow efficiency.",
          icon: "automation",
        },
      ],
      detailKicker: "AI and workflow support",
      details: [
        {
          name: "AI Workflow Design",
          description:
            "Design repeatable AI-assisted processes for research, content, reporting, and execution support.",
        },
        {
          name: "Prompt Engineering",
          description:
            "Write structured prompts that clarify context, constraints, output format, and review criteria.",
        },
        {
          name: "Workflow Automation",
          description:
            "Reduce repetitive marketing tasks through lightweight systems, templates, and process logic.",
        },
      ],
    }, {
      title: "技术技能",
      titleLines: ["技术", "技能"],
      rubric: "AI",
      note: "用 AI 工作流与技术理解支持更高效的现代营销执行。",
      folio: "AI / 提示词 / 流程",
      summary:
        "技术技能用于支持 AI 辅助工作流、提示词系统与轻量自动化，让营销工作更有结构也更高效。",
      tools: [
        {
          name: "HTML",
          description:
            "用于基础内容结构编辑、邮件或页面片段调整，以及技术沟通交接。",
          icon: "web",
        },
        {
          name: "Python",
          description:
            "用于轻量脚本、自动化、数据处理与可重复的营销工作流支持。",
          icon: "automation",
        },
        {
          name: "AI 编程助手",
          meta: "Cursor · Claude Code · Codex · etc.",
          description:
            "使用 Cursor、Claude Code、Codex 等 AI 编程助手，加速开发、自动化重复任务并提升工作流效率。",
          icon: "automation",
        },
      ],
      detailKicker: "AI 与流程支持",
      details: [
        {
          name: "AI 工作流设计",
          description:
            "为研究、内容、报告与执行支持设计可重复的 AI 辅助流程。",
        },
        {
          name: "提示词工程",
          description:
            "撰写结构化提示词，明确背景、限制、输出格式与审核标准。",
        },
        {
          name: "工作流自动化",
          description:
            "通过轻量系统、模板与流程逻辑减少重复性的营销任务。",
        },
      ],
    }, {
      title: "技術技能",
      titleLines: ["技術", "技能"],
      rubric: "AI",
      note: "用 AI 工作流與技術理解支持更高效的現代行銷執行。",
      folio: "AI / 提示詞 / 流程",
      summary:
        "技術技能用於支持 AI 輔助工作流、提示詞系統與輕量自動化，讓行銷工作更有結構也更高效。",
      tools: [
        {
          name: "HTML",
          description:
            "用於基礎內容結構編輯、郵件或頁面片段調整，以及技術溝通交接。",
          icon: "web",
        },
        {
          name: "Python",
          description:
            "用於輕量腳本、自動化、資料處理與可重複的行銷工作流支持。",
          icon: "automation",
        },
        {
          name: "AI 編程助手",
          meta: "Cursor · Claude Code · Codex · etc.",
          description:
            "使用 Cursor、Claude Code、Codex 等 AI 編程助手，加速開發、自動化重複任務並提升工作流效率。",
          icon: "automation",
        },
      ],
      detailKicker: "AI 與流程支持",
      details: [
        {
          name: "AI 工作流設計",
          description:
            "為研究、內容、報告與執行支持設計可重複的 AI 輔助流程。",
        },
        {
          name: "提示詞工程",
          description:
            "撰寫結構化提示詞，明確背景、限制、輸出格式與審核標準。",
        },
        {
          name: "工作流自動化",
          description:
            "透過輕量系統、模板與流程邏輯減少重複性的行銷任務。",
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
      note: "Marketing assets shaped for clarity, attention, and channel fit.",
      folio: "Design / Social / Video",
      summary:
        "Creative and content work turns marketing strategy into visual assets, social creatives, presentations, and video content that can support campaigns across channels.",
      tools: [
        {
          name: "Canva",
          description:
            "Fast visual layouts, social creatives, campaign assets, and presentation-ready drafts.",
          icon: "content",
        },
        {
          name: "Adobe Premiere Pro",
          description:
            "Video editing, timeline refinement, and polished marketing content production.",
          icon: "content",
        },
        {
          name: "Adobe InDesign",
          description:
            "Editorial layouts, presentation materials, and structured print or digital documents.",
          icon: "content",
        },
        {
          name: "Affinity Publisher",
          description:
            "Page layout, publication design, and polished marketing collateral preparation.",
          icon: "content",
        },
        {
          name: "CapCut",
          description:
            "Short-form video editing, social content assembly, and lightweight motion edits.",
          icon: "content",
        },
      ],
      detailKicker: "Creative production",
      details: [
        {
          name: "Visual Content Design",
          description:
            "Create clear visual layouts that support campaign messaging and brand presentation.",
        },
        {
          name: "Social Media Creatives",
          description:
            "Develop social-first assets for paid, organic, and campaign communication needs.",
        },
        {
          name: "Presentation Design",
          description:
            "Turn ideas, insights, and campaign plans into structured visual presentation materials.",
        },
        {
          name: "Video Editing",
          description:
            "Edit short and long-form marketing videos for clarity, rhythm, and platform fit.",
        },
        {
          name: "Marketing Assets",
          description:
            "Prepare campaign graphics, documents, and content assets for practical marketing use.",
        },
      ],
    }, {
      title: "内容创作",
      titleLines: ["内容", "创作"],
      rubric: "内容",
      note: "为清晰表达、注意力与渠道适配制作营销内容资产。",
      folio: "设计 / 社交 / 视频",
      summary:
        "内容创作把营销策略转化为视觉资产、社交创意、演示材料与视频内容，用于支持不同渠道的 campaign 执行。",
      tools: [
        {
          name: "Canva",
          description:
            "用于快速视觉排版、社交创意、campaign 资产与演示草稿。",
          icon: "content",
        },
        {
          name: "Adobe Premiere Pro",
          description:
            "用于视频剪辑、时间线精修与更完整的营销内容制作。",
          icon: "content",
        },
        {
          name: "Adobe InDesign",
          description:
            "用于编辑式排版、演示材料，以及结构化印刷或数字文档。",
          icon: "content",
        },
        {
          name: "Affinity Publisher",
          description:
            "用于页面排版、出版物设计与精修营销物料准备。",
          icon: "content",
        },
        {
          name: "CapCut",
          description:
            "用于短视频剪辑、社交内容组装与轻量动效编辑。",
          icon: "content",
        },
      ],
      detailKicker: "内容制作",
      details: [
        {
          name: "视觉内容设计",
          description:
            "制作支持 campaign 信息表达与品牌呈现的清晰视觉版式。",
        },
        {
          name: "社交媒体创意",
          description:
            "开发以社交媒体为先导的素材，满足付费、自然流量和营销活动传播需求。",
        },
        {
          name: "演示设计",
          description:
            "把想法、洞察与 campaign 计划整理成结构化视觉演示材料。",
        },
        {
          name: "视频剪辑",
          description:
            "围绕清晰度、节奏与平台适配剪辑短视频和较完整的营销视频。",
        },
        {
          name: "营销资产",
          description:
            "准备 campaign 图像、文档与内容资产，用于实际营销执行。",
        },
      ],
    }, {
      title: "內容創作",
      titleLines: ["內容", "創作"],
      rubric: "內容",
      note: "為清晰表達、注意力與渠道適配製作行銷內容資產。",
      folio: "設計 / 社群 / 影片",
      summary:
        "內容創作把行銷策略轉化為視覺資產、社群創意、簡報材料與影片內容，用於支持不同渠道的 campaign 執行。",
      tools: [
        {
          name: "Canva",
          description:
            "用於快速視覺排版、社群創意、campaign 資產與簡報草稿。",
          icon: "content",
        },
        {
          name: "Adobe Premiere Pro",
          description:
            "用於影片剪輯、時間線精修與更完整的行銷內容製作。",
          icon: "content",
        },
        {
          name: "Adobe InDesign",
          description:
            "用於編輯式排版、簡報材料，以及結構化印刷或數位文件。",
          icon: "content",
        },
        {
          name: "Affinity Publisher",
          description:
            "用於頁面排版、出版物設計與精修行銷物料準備。",
          icon: "content",
        },
        {
          name: "CapCut",
          description:
            "用於短影音剪輯、社群內容組裝與輕量動效編輯。",
          icon: "content",
        },
      ],
      detailKicker: "內容製作",
      details: [
        {
          name: "視覺內容設計",
          description:
            "製作支持 campaign 訊息表達與品牌呈現的清晰視覺版式。",
        },
        {
          name: "社群媒體創意",
          description:
            "開發以社群媒體為先導的素材，滿足付費、自然流量和行銷活動傳播需求。",
        },
        {
          name: "簡報設計",
          description:
            "把想法、洞察與 campaign 計畫整理成結構化視覺簡報材料。",
        },
        {
          name: "影片剪輯",
          description:
            "圍繞清晰度、節奏與平台適配剪輯短影音和較完整的行銷影片。",
        },
        {
          name: "行銷資產",
          description:
            "準備 campaign 圖像、文件與內容資產，用於實際行銷執行。",
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
    translations: skillTitle("More", "更多", "更多"),
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
