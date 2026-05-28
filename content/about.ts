import type { Locale } from "@/types/preferences";

type AboutInfoBlock = {
  label: string;
  items: {
    text: string;
    variant?: "meta";
  }[];
};

type AboutContent = {
  label: string;
  introLines: string[];
  portraitAlt: string;
  portraitImage: string;
  resumeCta: string;
  resumeHref: string;
  resumeRequest: {
    title: string;
    versionPrompt: string;
    description: string;
    emailLabel: string;
    emailPlaceholder: string;
    resumeVersions: {
      id: "en" | "cn";
      label: string;
    }[];
    submitLabel: string;
    loadingLabel: string;
    successMessage: string;
    successDetail: string;
    errorMessage: string;
    closeLabel: string;
  };
  infoBlocks: AboutInfoBlock[];
};

const enAboutContent: AboutContent = {
  label: "ABOUT",
  introLines: [
    "Observing how people connect with brands, spaces, and stories through digital experiences.",
  ],
  portraitAlt: "Editorial portrait of Kristy Shi",
  portraitImage: "/images/about-portrait.jpg",
  resumeCta: "View Resume",
  resumeHref: "/resume.pdf",
  resumeRequest: {
    title: "RESUME",
    versionPrompt: "Choose a version to receive",
    description: "Enter your email to receive a selected PDF version of my resume.",
    emailLabel: "Email",
    emailPlaceholder: "Email address",
    resumeVersions: [
      { id: "en", label: "English Resume" },
      { id: "cn", label: "中文简历" },
    ],
    submitLabel: "Send Resume",
    loadingLabel: "Sending...",
    successMessage: "Resume sent successfully.",
    successDetail: "Please check your inbox.",
    errorMessage: "Something went wrong. Please try again.",
    closeLabel: "Close",
  },
  infoBlocks: [
    {
      label: "EDUCATION",
      items: [
        { text: "University of Wisconsin–Madison" },
        { text: "Sept. 2024 to Dec. 2026", variant: "meta" },
      ],
    },
    {
      label: "MAJORS",
      items: [
        { text: "Strategic Communication" },
        { text: "Information Science" },
      ],
    },
    {
      label: "INTERESTED AREAS",
      items: [
        { text: "Campaign Strategy" },
        { text: "Digital Marketing" },
        { text: "SEO / SEM / GEO" },
      ],
    },
  ],
};

const zhHansAboutContent: AboutContent = {
  label: "关于",
  introLines: [
    "关注人与品牌、空间与内容之间，",
    "如何通过数字体验建立连接。",
  ],
  portraitAlt: "Kristy Shi 的编辑风格肖像",
  portraitImage: "/images/about-portrait.jpg",
  resumeCta: "获取简历",
  resumeHref: "/resume.pdf",
  resumeRequest: {
    title: "简历",
    versionPrompt: "选择想获取的简历版本",
    description: "输入邮箱后，即可收到对应版本的 PDF 简历。",
    emailLabel: "邮箱",
    emailPlaceholder: "邮箱地址",
    resumeVersions: [
      { id: "en", label: "English Resume" },
      { id: "cn", label: "中文简历" },
    ],
    submitLabel: "发送简历",
    loadingLabel: "发送中...",
    successMessage: "简历已发送成功。",
    successDetail: "请查看你的邮箱。",
    errorMessage: "Something went wrong. Please try again.",
    closeLabel: "关闭",
  },
  infoBlocks: [
    {
      label: "教育背景",
      items: [
        { text: "威斯康辛大学麦迪逊分校" },
        { text: "2024年9月 至 2026年12月", variant: "meta" },
      ],
    },
    {
      label: "专业方向",
      items: [{ text: "策略传媒" }, { text: "信息科学" }],
    },
    {
      label: "兴趣领域",
      items: [
        { text: "营销策略" },
        { text: "数字营销" },
        { text: "SEO / SEM / GEO" },
      ],
    },
  ],
};

const zhHantAboutContent: AboutContent = {
  label: "關於",
  introLines: [
    "關注人與品牌、空間與內容之間，",
    "如何透過數位體驗建立連結。",
  ],
  portraitAlt: "Kristy Shi 的編輯風格肖像",
  portraitImage: "/images/about-portrait.jpg",
  resumeCta: "獲取簡歷",
  resumeHref: "/resume.pdf",
  resumeRequest: {
    title: "簡歷",
    versionPrompt: "選擇想獲取的簡歷版本",
    description: "輸入信箱後，即可收到對應版本的 PDF 簡歷。",
    emailLabel: "信箱",
    emailPlaceholder: "信箱地址",
    resumeVersions: [
      { id: "en", label: "English Resume" },
      { id: "cn", label: "中文簡歷" },
    ],
    submitLabel: "發送簡歷",
    loadingLabel: "發送中...",
    successMessage: "簡歷已發送成功。",
    successDetail: "請查看你的信箱。",
    errorMessage: "Something went wrong. Please try again.",
    closeLabel: "關閉",
  },
  infoBlocks: [
    {
      label: "教育背景",
      items: [
        { text: "威斯康辛大學麥迪遜分校" },
        { text: "2024年9月 至 2026年12月", variant: "meta" },
      ],
    },
    {
      label: "專業方向",
      items: [{ text: "策略傳媒" }, { text: "信息科學" }],
    },
    {
      label: "興趣領域",
      items: [
        { text: "行銷策略" },
        { text: "數位行銷" },
        { text: "SEO / SEM / GEO" },
      ],
    },
  ],
};

export const aboutContent: Record<Locale, AboutContent> = {
  en: enAboutContent,
  "zh-CN": zhHansAboutContent,
  "zh-TW": zhHantAboutContent,
};
