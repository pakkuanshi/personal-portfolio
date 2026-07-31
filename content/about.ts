import type { Locale } from "@/types/preferences";
import { RESUME_PDF_PATH } from "@/lib/resume-assets";

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
    description: string;
    firstNameLabel: string;
    firstNamePlaceholder: string;
    lastNameLabel: string;
    lastNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitLabel: string;
    loadingLabel: string;
    successMessage: string;
    successDetail: string;
    invalidEmailMessage: string;
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
  resumeHref: RESUME_PDF_PATH,
  resumeRequest: {
    title: "View My Resume",
    description:
      "Enter your email below to receive a copy of my resume. A PDF will also open automatically after submission.",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "Optional",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Optional",
    emailLabel: "Email Address",
    emailPlaceholder: "Email address",
    submitLabel: "Send & View Resume",
    loadingLabel: "Sending...",
    successMessage: "✓ Resume sent successfully.",
    successDetail: "Check your inbox for a copy of my resume.",
    invalidEmailMessage: "Please enter a valid email address.",
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
  resumeHref: RESUME_PDF_PATH,
  resumeRequest: {
    title: "查看我的简历",
    description: "输入邮箱后，我会将简历发送给你；提交成功后也会自动打开 PDF。",
    firstNameLabel: "名字",
    firstNamePlaceholder: "选填",
    lastNameLabel: "姓氏",
    lastNamePlaceholder: "选填",
    emailLabel: "邮箱地址",
    emailPlaceholder: "邮箱地址",
    submitLabel: "发送并查看简历",
    loadingLabel: "发送中...",
    successMessage: "✓ 简历已发送成功。",
    successDetail: "请查看你的邮箱，获取一份简历副本。",
    invalidEmailMessage: "请输入有效的邮箱地址。",
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
  resumeHref: RESUME_PDF_PATH,
  resumeRequest: {
    title: "查看我的簡歷",
    description: "輸入信箱後，我會將簡歷發送給你；提交成功後也會自動打開 PDF。",
    firstNameLabel: "名字",
    firstNamePlaceholder: "選填",
    lastNameLabel: "姓氏",
    lastNamePlaceholder: "選填",
    emailLabel: "信箱地址",
    emailPlaceholder: "信箱地址",
    submitLabel: "發送並查看簡歷",
    loadingLabel: "發送中...",
    successMessage: "✓ 簡歷已發送成功。",
    successDetail: "請查看你的信箱，獲取一份簡歷副本。",
    invalidEmailMessage: "請輸入有效的信箱地址。",
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
