import type { Locale } from "@/types/preferences";

export type ExperienceCategoryKey = "professional" | "projects";

type ExperienceIndexItem = {
  id: string;
  title: string;
  role?: string;
  type?: string;
  location?: string;
  timePeriod: string;
  description: string;
  image?: string;
  href: string;
};

type ExperienceIndexCategory = {
  key: ExperienceCategoryKey;
  title: string;
  subtitle: string;
  href: string;
  summaryItems: string[];
  items: ExperienceIndexItem[];
};

type ExperienceIndexContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  backLabel: string;
  futureDetailLabel: string;
  locationLabel: string;
  timeLabel: string;
  categories: Record<ExperienceCategoryKey, ExperienceIndexCategory>;
};

export const experienceIndexContent: Record<Locale, ExperienceIndexContent> = {
  en: {
    eyebrow: "Experiences",
    title: "Experiences",
    subtitle: "Choose a path through selected roles and project archives.",
    backLabel: "Back to Experiences",
    futureDetailLabel: "View archive",
    locationLabel: "Location",
    timeLabel: "Time",
    categories: {
      professional: {
        key: "professional",
        title: "Professional Experiences",
        subtitle: "Selected roles across SEO, media planning, and brand promotion.",
        href: "/experiences/professional",
        summaryItems: [
          "Lovart",
          "Publicis Groupe ｜ Marriott Account",
          "Shanghai Media Group | Yicai",
        ],
        items: [
          {
            id: "lovart",
            title: "Lovart",
            role: "SEO Digital Marketing Intern",
            location: "Beijing, China",
            timePeriod: "May 2026 to present",
            description:
              "SEO and digital marketing work supporting content visibility and growth.",
            image: "/images/experiences/lovart-logo.svg",
            href: "/experiences/professional/lovart",
          },
          {
            id: "publicis",
            title: "Publicis Groupe ｜ Marriott Account",
            role: "Media Planning & Performance Marketing Intern",
            location: "Shanghai, China",
            timePeriod: "May 2025 to Aug. 2026",
            description:
              "Media planning and performance marketing experience on the Marriott account.",
            image: "/images/experiences/publicis-groupe.jpg",
            href: "/experiences/professional/publicis",
          },
          {
            id: "yicai",
            title: "Shanghai Media Group | Yicai",
            role: "Brand Promotion Assistant",
            location: "Shanghai, China",
            timePeriod: "Jul. 2024 to Aug. 2024",
            description:
              "Brand promotion support within a business news and media environment.",
            image: "/images/experiences/yicai-logo.jpg",
            href: "/experiences/professional/yicai",
          },
        ],
      },
      projects: {
        key: "projects",
        title: "Projects",
        subtitle: "Campaign and web projects collected as an archive of applied work.",
        href: "/experiences/projects",
        summaryItems: [
          "Sheboygan County Foster Care Campaign",
          "Grape-Nut Campaign",
          "Good to Go Campaign",
        ],
        items: [
          {
            id: "foster",
            title: "Sheboygan County Foster Care Campaign",
            type: "Campaign Project",
            location: "Madison, WI",
            timePeriod: "Sept. 2025 to Dec. 2025",
            description:
              "Campaign work focused on audience framing and community communication.",
            image: "/images/experiences/sheboygan-foster-care.jpg",
            href: "/experiences/projects/foster",
          },
          {
            id: "grape-nuts",
            title: "Grape-Nut Campaign",
            type: "Campaign Project",
            location: "Madison, WI (Remote)",
            timePeriod: "May 2025 to Aug. 2026",
            description:
              "A campaign archive for brand positioning, planning, and communication strategy.",
            image: "/images/experiences/grape-nut.jpg",
            href: "/experiences/projects/grape-nuts",
          },
          {
            id: "good-to-go",
            title: "Good to Go Campaign",
            type: "Web Project",
            location: "Madison, WI",
            timePeriod: "Jan. 2025 to May. 2025",
            description:
              "Web development work shaped around a clear public-facing experience.",
            image: "/images/experiences/good-to-go-logo.png",
            href: "/experiences/projects/good-to-go",
          },
        ],
      },
    },
  },
  "zh-CN": {
    eyebrow: "经历",
    title: "经历",
    subtitle: "选择一条路径，浏览专业经历与项目档案。",
    backLabel: "返回经历",
    futureDetailLabel: "查看档案",
    locationLabel: "城市",
    timeLabel: "时间",
    categories: {
      professional: {
        key: "professional",
        title: "专业经历",
        subtitle: "围绕 SEO、媒介策划与品牌推广的精选经历。",
        href: "/experiences/professional",
        summaryItems: ["Lovart", "阳狮集团｜万豪酒店", "上海广播电视台｜第一财经"],
        items: [
          {
            id: "lovart",
            title: "Lovart",
            role: "SEO数字营销实习生",
            location: "北京，中国",
            timePeriod: "2026年5月至今",
            description: "支持内容可见度与增长的 SEO 和数字营销工作。",
            image: "/images/experiences/lovart-logo.svg",
            href: "/experiences/professional/lovart",
          },
          {
            id: "publicis",
            title: "阳狮集团｜万豪酒店",
            role: "媒介策划与效果营销实习生",
            location: "上海，中国",
            timePeriod: "2025年5月至2026年8月",
            description: "参与万豪客户相关的媒介策划与效果营销工作。",
            image: "/images/experiences/publicis-groupe.jpg",
            href: "/experiences/professional/publicis",
          },
          {
            id: "yicai",
            title: "上海广播电视台｜第一财经",
            role: "品牌推广助理",
            location: "上海，中国",
            timePeriod: "2024年7月至2024年8月",
            description: "在商业新闻与媒体环境中支持品牌推广相关工作。",
            image: "/images/experiences/yicai-logo.jpg",
            href: "/experiences/professional/yicai",
          },
        ],
      },
      projects: {
        key: "projects",
        title: "项目",
        subtitle: "以档案形式整理的 campaign 与网页项目。",
        href: "/experiences/projects",
        summaryItems: [
          "Sheboygan 寄养家庭Campaign",
          "Grape-Nut Campaign",
          "Good to Go Campaign",
        ],
        items: [
          {
            id: "foster",
            title: "Sheboygan 寄养家庭Campaign",
            type: "Campaign 项目",
            location: "Madison，WI",
            timePeriod: "2025年9月至2025年12月",
            description: "关注受众框架与社区传播的 campaign 项目。",
            image: "/images/experiences/sheboygan-foster-care.jpg",
            href: "/experiences/projects/foster",
          },
          {
            id: "grape-nuts",
            title: "Grape-Nut Campaign",
            type: "Campaign 项目",
            location: "Madison，WI（远程）",
            timePeriod: "2025年5月至2026年8月",
            description: "围绕品牌定位、策划与传播策略整理的 campaign 档案。",
            image: "/images/experiences/grape-nut.jpg",
            href: "/experiences/projects/grape-nuts",
          },
          {
            id: "good-to-go",
            title: "Good to Go Campaign",
            type: "网页项目",
            location: "Madison，WI",
            timePeriod: "2025年1月至2025年5月",
            description: "围绕清晰公共体验构建的网页开发项目。",
            image: "/images/experiences/good-to-go-logo.png",
            href: "/experiences/projects/good-to-go",
          },
        ],
      },
    },
  },
  "zh-TW": {
    eyebrow: "經歷",
    title: "經歷",
    subtitle: "選擇一條路徑，瀏覽專業經歷與項目檔案。",
    backLabel: "返回經歷",
    futureDetailLabel: "查看檔案",
    locationLabel: "城市",
    timeLabel: "時間",
    categories: {
      professional: {
        key: "professional",
        title: "專業經歷",
        subtitle: "圍繞 SEO、媒體策劃與品牌推廣的精選經歷。",
        href: "/experiences/professional",
        summaryItems: ["Lovart", "陽獅集團｜萬豪酒店", "上海廣播電視台｜第一財經"],
        items: [
          {
            id: "lovart",
            title: "Lovart",
            role: "SEO數位行銷實習生",
            location: "北京，中國",
            timePeriod: "2026年5月至今",
            description: "支持內容可見度與成長的 SEO 和數位行銷工作。",
            image: "/images/experiences/lovart-logo.svg",
            href: "/experiences/professional/lovart",
          },
          {
            id: "publicis",
            title: "陽獅集團｜萬豪酒店",
            role: "媒體策劃與成效行銷實習生",
            location: "上海，中國",
            timePeriod: "2025年5月至2026年8月",
            description: "參與萬豪客戶相關的媒體策劃與成效行銷工作。",
            image: "/images/experiences/publicis-groupe.jpg",
            href: "/experiences/professional/publicis",
          },
          {
            id: "yicai",
            title: "上海廣播電視台｜第一財經",
            role: "品牌推廣助理",
            location: "上海，中國",
            timePeriod: "2024年7月至2024年8月",
            description: "在商業新聞與媒體環境中支持品牌推廣相關工作。",
            image: "/images/experiences/yicai-logo.jpg",
            href: "/experiences/professional/yicai",
          },
        ],
      },
      projects: {
        key: "projects",
        title: "項目",
        subtitle: "以檔案形式整理的 campaign 與網頁項目。",
        href: "/experiences/projects",
        summaryItems: [
          "Sheboygan 寄養家庭Campaign",
          "Grape-Nut Campaign",
          "Good to Go Campaign",
        ],
        items: [
          {
            id: "foster",
            title: "Sheboygan 寄養家庭Campaign",
            type: "Campaign 項目",
            location: "Madison，WI",
            timePeriod: "2025年9月至2025年12月",
            description: "關注受眾框架與社群傳播的 campaign 項目。",
            image: "/images/experiences/sheboygan-foster-care.jpg",
            href: "/experiences/projects/foster",
          },
          {
            id: "grape-nuts",
            title: "Grape-Nut Campaign",
            type: "Campaign 項目",
            location: "Madison，WI（遠端）",
            timePeriod: "2025年5月至2026年8月",
            description: "圍繞品牌定位、策劃與傳播策略整理的 campaign 檔案。",
            image: "/images/experiences/grape-nut.jpg",
            href: "/experiences/projects/grape-nuts",
          },
          {
            id: "good-to-go",
            title: "Good to Go Campaign",
            type: "網頁項目",
            location: "Madison，WI",
            timePeriod: "2025年1月至2025年5月",
            description: "圍繞清晰公共體驗構建的網頁開發項目。",
            image: "/images/experiences/good-to-go-logo.png",
            href: "/experiences/projects/good-to-go",
          },
        ],
      },
    },
  },
};
