import type { Locale, ThemeMode } from "@/types/preferences";

export const localeOptions: { value: Locale; label: string; shortLabel: string }[] = [
  { value: "en", label: "English", shortLabel: "EN" },
  { value: "zh-CN", label: "简体中文", shortLabel: "简" },
  { value: "zh-TW", label: "繁體中文", shortLabel: "繁" },
];

export const themeOptions: { value: ThemeMode; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

export const dictionary = {
  en: {
    site: {
      name: "Kristy Shi",
      role: "Marketing & Strategic Communication",
      footer:
        "Exploring the intersection of marketing, analytics, and digital experiences.",
      nav: {
        home: "Home",
        experiences: "Experiences",
        projects: "Projects",
        skills: "Skills",
        about: "About",
        contact: "Contact",
      },
      navDropdown: {
        professionalExperiences: "Professional Experiences",
        relevantExperiences: "Projects",
      },
      labels: {
        contact: "Contact",
        navigation: "Navigation",
      },
    },
    preferences: {
      theme: "Theme",
      language: "Language",
    },
    home: {
      heroTitle: "A strategic communication portfolio built to grow over time.",
      heroIntro:
        "Placeholder introduction for a marketing and strategic communication student focused on campaign thinking, digital strategy, SEO, and evidence-led storytelling.",
      viewWork: "View work",
      readProfile: "Read profile",
      focusAreasLabel: "Focus Areas",
      focusAreas: [
        "Campaign strategy",
        "Digital marketing",
        "SEO thinking",
        "Data analysis",
        "Strategic communication",
      ],
      selectedWork: {
        eyebrow: "Selected Work",
        title: "Placeholder case studies with room for deeper narrative.",
        description:
          "This section reads from the project content system, so future work can be added without rewriting the component.",
      },
      about: {
        eyebrow: "About",
        title: "A quiet foundation for a long-term personal brand.",
        description:
          "Placeholder profile copy for a marketing and strategic communication student. This area will later introduce the person behind the work, the strategic lens, and the kinds of problems the portfolio is built to explore.",
        readMore: "Read more",
        capabilities: [
          {
            label: "Thinking",
            title: "Strategic framing",
            description:
              "Placeholder for campaign planning, audience insight, and positioning logic.",
          },
          {
            label: "Practice",
            title: "Digital communication",
            description:
              "Placeholder for content systems, SEO research, analytics, and channel decisions.",
          },
        ],
      },
      aboutPreview: {
        title: "About",
        educationLabel: "Education preview",
        school: "University of Wisconsin–Madison",
        period: "9/2024 - 12/2026",
        program: "Strategic Communication & Information Science",
        degree: "Bachelor of Arts",
        imageLabel: "Portrait preview",
        imageAlt: "Kristy Shi portrait",
        link: "View About",
      },
    },
    pages: {
      experiences: {
        eyebrow: "Experiences",
        title: "Experience highlights will live here.",
        description:
          "This page will later organize internships, campus roles, client-style projects, research work, and leadership experiences.",
      },
      projects: {
        eyebrow: "Projects",
        title: "Selected case studies and strategic work.",
        description:
          "A scalable project index for campaign strategy, SEO thinking, digital marketing, analytics, and communication case studies.",
      },
      about: {
        eyebrow: "About",
        title: "Personal positioning and background will live here.",
        description:
          "This page will later hold a concise narrative, academic context, working principles, and professional interests.",
      },
      resume: {
        eyebrow: "Resume",
        title: "A web resume structure will be added here.",
        description:
          "This route is reserved for education, experience, skills, selected coursework, and a future PDF resume link.",
      },
      skills: {
        eyebrow: "Skills",
        title: "A focused skill system will live here.",
        description:
          "This page will later group strategy, digital marketing, SEO, analytics, research, writing, and tool-based capabilities.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's Connect.",
        description:
          "Whether you're hiring, looking for a collaborator, or simply want to chat about digital marketing, analytics, AI products, or new opportunities, I'd love to hear from you.",
      },
    },
    caseStudy: {
      tags: "Tags",
      coverPlaceholder: "Cover image placeholder",
      overview: {
        category: "Category",
        year: "Year",
        role: "Role",
        tools: "Tools",
      },
      sections: {
        challenge: ["Challenge", "The problem to solve"],
        insight: ["Insight", "The strategic opening"],
        strategy: ["Strategy", "The direction of the work"],
        execution: ["Execution", "How the idea becomes usable"],
        outcome: ["Outcome", "What this work is meant to show"],
      },
      nextProject: "Next Project",
      viewCaseStudy: "View case study",
    },
  },
  "zh-CN": {
    site: {
      name: "Kristy Shi",
      role: "市场营销与战略传播",
      footer: "探索市场营销、数据分析与数字体验的交汇。",
      nav: {
        home: "首页",
        experiences: "经历",
        projects: "項目",
        skills: "技能",
        about: "关于",
        contact: "联系",
      },
      navDropdown: {
        professionalExperiences: "专业经历",
        relevantExperiences: "项目",
      },
      labels: {
        contact: "联系",
        navigation: "导航",
      },
    },
    preferences: {
      theme: "主题",
      language: "语言",
    },
    home: {
      heroTitle: "一个可以长期生长的战略传播作品集。",
      heroIntro:
        "这里暂放市场营销与战略传播学生的简介，用于展示 campaign thinking、数字策略、SEO 思维与基于证据的叙事能力。",
      viewWork: "查看项目",
      readProfile: "了解背景",
      focusAreasLabel: "关注方向",
      focusAreas: ["Campaign 策略", "数字营销", "SEO 思维", "数据分析", "战略传播"],
      selectedWork: {
        eyebrow: "精选项目",
        title: "为深度叙事预留空间的案例研究。",
        description:
          "这个区域直接读取项目内容系统，因此未来新增作品时不需要重写组件。",
      },
      about: {
        eyebrow: "关于",
        title: "为长期个人品牌打下安静而清晰的基础。",
        description:
          "这里暂放个人简介。未来会用于介绍作品背后的人、战略视角，以及这个作品集想持续探索的问题。",
        readMore: "继续阅读",
        capabilities: [
          {
            label: "思考",
            title: "战略框架",
            description: "这里暂放 campaign planning、受众洞察与定位逻辑。",
          },
          {
            label: "实践",
            title: "数字传播",
            description: "这里暂放内容系统、SEO 研究、数据分析与渠道判断。",
          },
        ],
      },
      aboutPreview: {
        title: "关于",
        educationLabel: "教育背景预览",
        school: "威斯康辛大学麦迪逊分校",
        period: "9/2024 - 12/2026",
        program: "策略传媒&信息科学",
        degree: "文学学士",
        imageLabel: "个人照片预览",
        imageAlt: "Kristy Shi 个人照片",
        link: "查看关于",
      },
    },
    pages: {
      experiences: {
        eyebrow: "经历",
        title: "这里将呈现经历亮点。",
        description:
          "未来会整理实习、校园角色、客户型项目、研究工作与领导力经历。",
      },
      projects: {
        eyebrow: "项目",
        title: "精选案例研究与策略作品。",
        description:
          "一个可扩展的项目索引，用于承载 campaign 策略、SEO 思维、数字营销、数据分析与传播案例。",
      },
      about: {
        eyebrow: "关于",
        title: "这里将呈现个人定位与背景。",
        description: "未来会放置简洁的个人叙事、学术背景、工作原则与职业兴趣。",
      },
      resume: {
        eyebrow: "简历",
        title: "这里将建立网页版简历结构。",
        description: "这个页面将用于教育经历、项目经验、技能、课程作品与未来 PDF 简历链接。",
      },
      skills: {
        eyebrow: "技能",
        title: "这里将呈现清晰的技能系统。",
        description:
          "未来会整理策略、数字营销、SEO、数据分析、研究、写作与工具能力。",
      },
      contact: {
        eyebrow: "联系",
        title: "Let's Connect.",
        description:
          "如果你正在招聘、寻找合作者，或想聊聊数字营销、数据分析、AI 产品与新的机会，欢迎联系我。",
      },
    },
    caseStudy: {
      tags: "标签",
      coverPlaceholder: "封面图占位",
      overview: {
        category: "类别",
        year: "年份",
        role: "角色",
        tools: "工具",
      },
      sections: {
        challenge: ["挑战", "需要解决的问题"],
        insight: ["洞察", "策略切入点"],
        strategy: ["策略", "工作的方向"],
        execution: ["执行", "如何把想法变得可用"],
        outcome: ["结果", "这个项目将展示什么"],
      },
      nextProject: "下一个项目",
      viewCaseStudy: "查看案例",
    },
  },
  "zh-TW": {
    site: {
      name: "Kristy Shi",
      role: "行銷與策略傳播",
      footer: "探索行銷、數據分析與數位體驗的交會。",
      nav: {
        home: "首頁",
        experiences: "經歷",
        projects: "項目",
        skills: "技能",
        about: "關於",
        contact: "聯絡",
      },
      navDropdown: {
        professionalExperiences: "專業經歷",
        relevantExperiences: "項目",
      },
      labels: {
        contact: "聯絡",
        navigation: "導覽",
      },
    },
    preferences: {
      theme: "主題",
      language: "語言",
    },
    home: {
      heroTitle: "一個可以長期生長的策略傳播作品集。",
      heroIntro:
        "這裡暫放行銷與策略傳播學生的簡介，用於展示 campaign thinking、數位策略、SEO 思維與以證據為基礎的敘事能力。",
      viewWork: "查看項目",
      readProfile: "了解背景",
      focusAreasLabel: "關注方向",
      focusAreas: ["Campaign 策略", "數位行銷", "SEO 思維", "資料分析", "策略傳播"],
      selectedWork: {
        eyebrow: "精選項目",
        title: "為深度敘事預留空間的案例研究。",
        description:
          "這個區域直接讀取項目內容系統，因此未來新增作品時不需要重寫元件。",
      },
      about: {
        eyebrow: "關於",
        title: "為長期個人品牌打下安靜而清晰的基礎。",
        description:
          "這裡暫放個人簡介。未來會用於介紹作品背後的人、策略視角，以及這個作品集想持續探索的問題。",
        readMore: "繼續閱讀",
        capabilities: [
          {
            label: "思考",
            title: "策略框架",
            description: "這裡暫放 campaign planning、受眾洞察與定位邏輯。",
          },
          {
            label: "實踐",
            title: "數位傳播",
            description: "這裡暫放內容系統、SEO 研究、資料分析與渠道判斷。",
          },
        ],
      },
      aboutPreview: {
        title: "關於",
        educationLabel: "教育背景預覽",
        school: "威斯康辛大學麥迪遜分校",
        period: "9/2024 - 12/2026",
        program: "策略傳媒&資訊科學",
        degree: "文學學士",
        imageLabel: "個人照片預覽",
        imageAlt: "Kristy Shi 個人照片",
        link: "查看關於",
      },
    },
    pages: {
      experiences: {
        eyebrow: "經歷",
        title: "這裡將呈現經歷亮點。",
        description:
          "未來會整理實習、校園角色、客戶型項目、研究工作與領導力經歷。",
      },
      projects: {
        eyebrow: "項目",
        title: "精選案例研究與策略作品。",
        description:
          "一個可擴展的項目索引，用於承載 campaign 策略、SEO 思維、數位行銷、資料分析與傳播案例。",
      },
      about: {
        eyebrow: "關於",
        title: "這裡將呈現個人定位與背景。",
        description: "未來會放置簡潔的個人敘事、學術背景、工作原則與職涯興趣。",
      },
      resume: {
        eyebrow: "履歷",
        title: "這裡將建立網頁版履歷結構。",
        description: "這個頁面將用於教育經歷、項目經驗、技能、課程作品與未來 PDF 履歷連結。",
      },
      skills: {
        eyebrow: "技能",
        title: "這裡將呈現清晰的技能系統。",
        description:
          "未來會整理策略、數位行銷、SEO、資料分析、研究、寫作與工具能力。",
      },
      contact: {
        eyebrow: "聯絡",
        title: "Let's Connect.",
        description:
          "如果你正在招聘、尋找合作者，或想聊聊數位行銷、數據分析、AI 產品與新的機會，歡迎聯絡我。",
      },
    },
    caseStudy: {
      tags: "標籤",
      coverPlaceholder: "封面圖佔位",
      overview: {
        category: "類別",
        year: "年份",
        role: "角色",
        tools: "工具",
      },
      sections: {
        challenge: ["挑戰", "需要解決的問題"],
        insight: ["洞察", "策略切入點"],
        strategy: ["策略", "工作的方向"],
        execution: ["執行", "如何把想法變得可用"],
        outcome: ["成果", "這個項目將展示什麼"],
      },
      nextProject: "下一個項目",
      viewCaseStudy: "查看案例",
    },
  },
} satisfies Record<Locale, unknown>;
