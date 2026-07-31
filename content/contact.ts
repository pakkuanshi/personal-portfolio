import type { Locale } from "@/types/preferences";

type ContactLinkItem = {
  href: string;
  label: string;
  newTab?: boolean;
  value: string;
};

type ContactTextItem = {
  label: string;
  note?: string;
  value: string | string[];
};

export type ContactItem = ContactLinkItem | ContactTextItem;

type ContactContent = {
  description: string;
  eyebrow: string;
  items: ContactItem[];
  title: string;
};

export const contactContent: Record<Locale, ContactContent> = {
  en: {
    eyebrow: "CONTACT",
    title: "LET'S CONNECT",
    description:
      "Whether you're hiring, looking for a collaborator, or simply want to chat about digital marketing, analytics, AI products, or new opportunities, I'd love to hear from you.",
    items: [
      {
        href: "mailto:pakkuanshi@gmail.com",
        label: "Email",
        value: "pakkuanshi@gmail.com",
      },
      {
        href: "https://www.linkedin.com/in/pakkuan-kristy-shi",
        label: "LinkedIn",
        newTab: true,
        value: "Connect →",
      },
      {
        label: "Based in",
        note: "Open to relocation and full-time opportunities.",
        value: ["Madison, WI", "Macao", "Hong Kong", "Mainland China"],
      },
    ],
  },
  "zh-CN": {
    eyebrow: "CONTACT",
    title: "LET'S CONNECT",
    description:
      "如果你正在招聘、寻找合作者，或想聊聊数字营销、数据分析、AI 产品与新的机会，欢迎联系我。",
    items: [
      {
        href: "mailto:pakkuanshi@gmail.com",
        label: "Email",
        value: "pakkuanshi@gmail.com",
      },
      {
        href: "https://www.linkedin.com/in/pakkuan-kristy-shi",
        label: "LinkedIn",
        newTab: true,
        value: "Connect →",
      },
      {
        label: "Based in",
        note: "Open to relocation and full-time opportunities.",
        value: ["Madison, WI", "Macao", "Hong Kong", "Mainland China"],
      },
    ],
  },
  "zh-TW": {
    eyebrow: "CONTACT",
    title: "LET'S CONNECT",
    description:
      "如果你正在招聘、尋找合作者，或想聊聊數位行銷、數據分析、AI 產品與新的機會，歡迎聯絡我。",
    items: [
      {
        href: "mailto:pakkuanshi@gmail.com",
        label: "Email",
        value: "pakkuanshi@gmail.com",
      },
      {
        href: "https://www.linkedin.com/in/pakkuan-kristy-shi",
        label: "LinkedIn",
        newTab: true,
        value: "Connect →",
      },
      {
        label: "Based in",
        note: "Open to relocation and full-time opportunities.",
        value: ["Madison, WI", "Macao", "Hong Kong", "Mainland China"],
      },
    ],
  },
};
